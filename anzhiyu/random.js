var posts=["2025/05/16/E-Connected-Components/","2025/05/27/Java的List集合/","2025/05/15/Java的内部类/","2025/05/27/Java的Collection集合/","2025/05/27/Java的包装类/","2025/05/15/Java的抽象与接口类/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };