const root = document.getElementById("root");

const h1 = document.createElement("h1");
h1.innerHTML = "MONA LISA";

root.appendChild(h1);

const p = document.createElement("p");
p.innerText = "The Mona Lisa is a famous painting."
root.appendChild(p);

const img = document.createElement("img");
img.src = 'https://media.cnn.com/api/v1/images/stellar/prod/131107152744-mona-lisa.jpg?q=w_2000,h_3000,x_0,y_0,c_fill';
img.style.height = "500px";
root.appendChild(img);

