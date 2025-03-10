import './App.css';

function setFullScreenHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

if (window.innerWidth > window.innerHeight && window.innerHeight < 480) {
  document.querySelector(".fullscreen").style.minHeight = "480px";
  document.querySelector(".fullscreen").style.overflowY = "auto";
} else {
  document.querySelector(".fullscreen").style.minHeight = "";
  document.querySelector(".fullscreen").style.overflowY = "";
}

window.addEventListener("resize", setFullScreenHeight);
setFullScreenHeight();

function App() {
  return (
    <div className="App fullscreen">
   
    </div>
  );
}

export default App;
