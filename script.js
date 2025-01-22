function makeGrid(n)
{
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
            const div = document.createElement("div")
            div.classList.add("square")
            container.appendChild(div)

            div.style.height = `${size / n}px`;
            div.style.width = `${size / n}px`;

            const r = Math.random() * 256;
            const g = Math.random() * 256;
            const b = Math.random() * 256;

            div.addEventListener('mouseenter', () => {
                div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            })

            clear.addEventListener('click', () =>{
                div.style.backgroundColor = "white";
            })
        }
    }
}

let size = 960;

container = document.querySelector("#container");

container.style.height = `${size}px`
container.style.width = `${size}px`

makeGrid(16);

resize = document.querySelector("#resize")
clear = document.querySelector("#clear")

resize.addEventListener("click", () => {
    let new_num = prompt("Enter a size between 1 to 100");

    if((new_num < 100) || (new_num > 1))
    {
        container.replaceChildren();
        makeGrid(new_num);
    }
})



