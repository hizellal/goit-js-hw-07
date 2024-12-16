const link = document.querySelectorAll(".item");
console.log("Number of categories:", link.length);

link.forEach((item) => {
    const name = item.querySelector("h2")
    console.log("Category:", name.textContent);
        
    const name_list = item.querySelectorAll("li");
    console.log("Elements:", name_list.length);
})
