<template>
    <img src="../assets/BG.jpg" class="movieBg" />
    <div class="movie-search-container">
        <!-- 搜索框 -->
        <div :class="['search-box', { 'search-box-moved': isSearching }]">
            <el-input v-model="searchQuery" placeholder="请输入电影名称" @keyup.enter="handleSearch" clearable>
                <template #prefix>
                    <el-icon>
                        <search />
                    </el-icon>
                </template>
                <template #append>
                    <el-button type="primary" @click="handleSearch">搜索</el-button>
                </template>
            </el-input>
        </div>

        <!-- 加载状态 -->
        <div v-if="isLoading" class="loading">
            <el-icon :size="30" class="is-loading">
                <loading />
            </el-icon>
            <span>正在搜索中...</span>
        </div>

        <!-- 搜索结果 -->
        <div v-if="isSearching" class="search-results">
            <el-row :gutter="20">
                <el-col v-for="movie in movies" :key="movie.id" :span="24" class="movie-item">
                    <el-card>
                        <el-row>
                            <!-- 电影图片 -->
                            <el-col :span="6">
                                <img :src="movie.poster" alt="电影海报" class="movie-poster" />
                            </el-col>

                            <!-- 电影信息 -->
                            <el-col :span="18" class="movie-info">
                                <h3>{{ movie.title }}</h3>
                                <p><strong>导演：</strong>{{ movie.director }}</p>
                                <p><strong>主演：</strong>{{ movie.cast }}</p>
                                <p><strong>上映时间：</strong>{{ movie.releaseDate }}</p>
                                <p><strong>简介：</strong>{{ movie.description }}</p>
                            </el-col>
                        </el-row>
                    </el-card>
                </el-col>
            </el-row>

            <!-- 无结果提示 -->
            <div v-if="movies.length === 0" class="no-results">
                <el-empty description="未找到相关电影" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { Search, Loading } from '@element-plus/icons-vue';

// 搜索框内容
const searchQuery = ref('');

// 是否正在搜索
const isSearching = ref(false);

// 是否正在加载
const isLoading = ref(false);

// 电影数据
const movies = ref([]);

// 处理搜索
const handleSearch = async () => {
    if (!searchQuery.value.trim()) {
        return;
    }

    isSearching.value = true;
    isLoading.value = true;

    try {
        // 发送搜索请求到后端
        const response = await axios.get('/api/movies/search', {
            params: {
                query: searchQuery.value,
            },
        });

        // 更新电影数据，最多显示 20 条
        movies.value = response.data.slice(0, 20);
    } catch (error) {
        console.error('搜索失败', error);
        movies.value = [];
    } finally {
        isLoading.value = false;
    }
};
</script>

<style scoped>
.movie-search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.search-box {
    width: 500px;
    height: 100px;
    margin-top: 20vh;
    /* 初始位置 */
    transition: margin-top 0.5s ease;
}

.search-box-moved {
    margin-top: 50px;
    /* 搜索后位置 */
}

.loading {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    font-size: 16px;
}

.search-results {
    width: 80%;
    margin-top: 20px;
}

.movie-item {
    margin-bottom: 20px;
}

.movie-poster {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.movie-info {
    padding-left: 20px;
}

.movie-info h3 {
    margin-top: 0;
}

.movie-info p {
    margin: 5px 0;
}

.no-results {
    margin-top: 20px;
    text-align: center;
}

.movieBg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>