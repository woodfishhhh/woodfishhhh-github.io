var posts=["2025/05/16/E-Connected-Components/","2025/05/27/Java的Collection集合/","2025/05/27/Java的List集合/","2025/06/03/Java的final/","2025/05/15/Java的内部类/","2025/05/27/Java的包装类/","2025/06/03/Java的多态/","2025/05/15/Java的抽象与接口类/","2025/06/03/Java的继承/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };