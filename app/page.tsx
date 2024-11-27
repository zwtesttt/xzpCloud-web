"use client";
export default function HomePage() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1>欢迎来到我的网站</h1>
      <p>这是一个简单的首页展示。</p>
      <button onClick={() => alert("按钮被点击了！")}>点击我</button>
      <div>我是首页</div>
    </div>
  );
}
