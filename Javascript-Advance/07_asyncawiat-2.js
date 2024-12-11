function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Post data fetched.`);
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Comment data fetched.`);
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log(`Fetching blog data...`);
    // const postData = await fetchPostData();
    // const commentData = await fetchCommentData();

    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(postData);
    console.log(commentData);
    console.log(`fetch completed !!`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
getBlogData();
