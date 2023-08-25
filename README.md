# Drop Down
This is a simple HTML and JavaScript code that allows you to change the properties of a div element.



# 1. HTML
he HTML code creates a container div and a target div.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DropDowns</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <label for="color">Color:</label>
        <select id="color">
          <option value="yellow">Yello</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
      
        </select>
        
      
        <label for="backgroundcolor">Background Color:</label>
        <select id="backgroundcolor">
          <option value="lightgreen">Light Green</option>
          <option value="lightgray">Light Gray</option>
          <option value="lightblue">Light Blue</option>
      
        </select>
      
        <label for="padding ">Padding:</label>
        <select id="padding ">
          <option value="0">0</option>
          <option value="5px">5px</option>
          <option value="20px">20px</option>
      
        </select>
      
        <label for="fontSize ">Font Size:</label>
        <select id="fontSize ">
          <option value="10px">10px</option>
          <option value="12px">12px</option>
          <option value="20px">20px</option>
       
        </select>
      
        <label for="fontWeight ">Font Weight:</label>
        <select id="fontWeight ">
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
          
        </select>
      </div>
      
        <div id="targetDiv">This is a simple div.</div>
        <script src="index.js"></script>
</body>
</html>

# 2.js

const col = document.getElementById('color');
const background = document.getElementById('backgroundcolor');
const padding  = document.getElementById('padding ');
const fontSize  = document.getElementById('fontSize ');
const fontWeight  = document.getElementById('fontWeight ');
const target = document.getElementById('targetDiv');

color.addEventListener('change', () => {
  target.style.color = col.value;
});

backgroundcolor.addEventListener('change', () => {
  target.style.backgroundColor = background.value;
});

padding .addEventListener('change', () => {
  target.style.padding = padding .value;
});

fontSize .addEventListener('change', () => {
  target.style.fontSize = fontSize .value;
});

fontWeight .addEventListener('change', () => {
  target.style.fontWeight = fontWeight .value;
});
