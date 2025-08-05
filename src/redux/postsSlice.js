import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import slugify from "@/utils/slugify";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data.map((post) => ({
      id: post.id,
      title: post.title,
      content: post.body,
      slug: slugify(post.title),
    }));
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching posts");
  }
});



const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
