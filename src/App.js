import './App.css';
import Main from './page/Main';
import StatusBar from './mobile/StatusBar';


function setFullScreenHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function adjustFullScreen() {
  const fullscreenElement = document.querySelector(".fullscreen");
  if (!fullscreenElement) return; // 요소가 없으면 실행하지 않음
  
  if (window.innerWidth > window.innerHeight && window.innerHeight < 480) {
    fullscreenElement.style.minHeight = "480px";
    fullscreenElement.style.overflowY = "auto";
  } else {
    fullscreenElement.style.minHeight = "";
    fullscreenElement.style.overflowY = "";
  }
}

window.addEventListener("resize", () => {
  setFullScreenHeight();
  adjustFullScreen();
});

// DOM이 렌더링된 후 실행하도록 변경
window.addEventListener("DOMContentLoaded", () => {
  setFullScreenHeight();
  adjustFullScreen();
});

function App() {
  return (
    <div className="App fullscreen">
      <StatusBar />
    </div>
  );
}

export default App;
