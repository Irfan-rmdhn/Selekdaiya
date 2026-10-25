class Workspace {
  constructor(screen) {
    this.el = document.querySelector(".screen.workspace");
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.nameFile = "iya";
    this.canvasWidth = 500;
    this.canvasHeight = 500;
    this.sizeCanvasWidthEl = document.querySelector("#size-width");
    this.sizeCanvasHeightEl = document.querySelector("#size-height");
    this.toolbar = document
      .querySelector(".toolbar-atas-workspace")
      .querySelectorAll("h2");
  }
  mount() {
    this.el.classList.add("active");
    this.NewLayer();
    this.initCanvas();
    this.pickToolbar();
  }
  NewLayer() {
    this.item = `
    <div class="layer-item">
    <h2>Hide</h2>
    <p>Background</p>
    </div>`;
    this.containerLayer = document.querySelector(".layer-bar");
    this.layerBarItem = document.createElement("div");
    this.layerBarItem.innerHTML = this.item;
    this.containerLayer.appendChild(this.layerBarItem);
  }
  pickToolbar() {
    this.toolbarActive = "";
    this.toolbar.forEach((tool) => {
      tool.onclick = (e) => {
        tool.classList.add("toolbar-pick");
        if (this.toolbarActive == "") {
          this.toolbarActive = tool.textContent;
        } else if (tool.textContent == this.toolbarActive) {
          tool.classList.remove("toolbar-pick");
          this.toolbarActive = "";
          // this.toolbarActive = item.textContent;
        } else {
          this.toolbar.forEach((iten) => {
            iten.classList.remove("toolbar-pick");
          });
          tool.classList.add("toolbar-pick");
          this.toolbarActive = tool.textContent;
        }
        if (this.toolbarActive == "brush") {
          this.pickShape();
          this.controllCanvas();
          this.pickOpacity();
        }
      };
    });
    this.sizeBrush = document.querySelector("#size-brush");
    this.sizeBrush.addEventListener("input", (e) => {
      this.sizeText.textContent = e.target.value;
    });
    this.sizeText = document.querySelector(".size").querySelector("h2");
    this.sizeText.textContent = this.sizeBrush.value;
  }
  pickShape() {
    this.shape = document.querySelector(".shape").querySelectorAll("h2");
    this.shapeActive = "bulat";
    this.shape.forEach((shape) => {
      if (shape.dataset.shape == "bulat") {
        shape.classList.add("shape-pick");
      }
      shape.onclick = (e) => {
        if (this.shapeActive == "") {
          this.shapeActive = shape.dataset.shape;
          shape.classList.add("shape-pick");
        } else {
          this.shape.forEach((item) => {
            item.classList.remove("shape-pick");
          });
          shape.classList.add("shape-pick");
          this.shapeActive = shape.dataset.shape;
        }
      };
    });
  }
  pickOpacity() {
    this.opacity = document.querySelector(".opacity").querySelectorAll("h2");
    this.opacityActive = "1";
    this.opacity.forEach((opacity) => {
      if (opacity.dataset.opacity == "1") {
        opacity.classList.add("opacity-pick");
      }
      opacity.onclick = () => {
        if (this.opacityActive) {
          this.opacity.forEach((itwm) => {
            itwm.classList.remove("opacity-pick");
            this.opacityActive = opacity.dataset.opacity;
            opacity.classList.add("opacity-pick");
          });
        }
        console.log(this.opacityActive);
      };
    });
  }
  controllCanvas() {
    this.Isdrawing = false;
    this.canvas.onmousedown = (e) => {
      this.Isdrawing = true;
      console.log(this.Isdrawing);
    };
    this.canvas.onmouseup = (e) => {
      this.Isdrawing = false;
    };
    console.log(this.Isdrawing);
    this.canvas.onmousemove = (e) => {
      if (this.Isdrawing) {
        this.gambarCanvas(e.offsetX, e.offsetY);
      }
    };
  }
  gambarCanvas(offsetX, offsetY) {
    if (this.shapeActive == "kotak") {
      this.ctx.globalAlpha = this.opacityActive;
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(
        offsetX,
        offsetY,
        this.sizeText.textContent,
        this.sizeText.textContent,
      );
      if (this.toolbarActive == "eraser") {
        this.ctx.globalCompositeOperation = "destination-out";
      } else {
        return;
      }
    } else {
      this.ctx.globalAlpha = this.opacityActive;
      this.ctx.beginPath();
      this.ctx.arc(offsetX, offsetY, this.sizeText.textContent, 0, Math.PI * 2);
      this.ctx.fillStyle = "red";
      this.ctx.fill();
      if (this.toolbarActive == "eraser") {
        this.ctx.globalCompositeOperation = "destination-out";
      } else {
        return;
      }
    }
  }
  initCanvas() {
    this.sizeCanvasWidthEl.textContent = this.canvasWidth;
    this.sizeCanvasHeightEl.textContent = this.canvasHeight;
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
  }
  unmount() {
    this.el.classList.remove("active");
  }
}
