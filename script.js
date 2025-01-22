container = document.querySelector("#container")

let n = 100

for(let i = 0; i < n; i++)
{
    for(let j = 0; j < n; j++)
    {
        const div = document.createElement("div")
        div.classList.add("square")
        container.appendChild(div)

        div.style.height = `${540 / n}px`;
        div.style.width = `${540 / n}px`;
    }
}



