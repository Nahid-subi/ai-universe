const fetchAllData = () =>{
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayAllData(data.data.tools))
};
const displayAllData = (data) => {
    const cardContainer = document.getElementById('cardContainer');
    data.forEach((value) =>{
        console.log(value)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
            <img class="rounded-lg p-4 h-72 w-full" src="${value.image}" alt="" />
        </a>
        <div class="p-4">
            <h5 class="mb-2 text-2xl font-bold">Features</h5>
            <p class="mb-3 font-medium text-gray-600">1.${value.features[0]}<p>
            <p class="mb-3 font-medium text-gray-600">2.${value.features[1]}<p>
            <p class="mb-3 font-medium text-gray-600">3.${value.features[2] ? value.features : 'No Data Found'}<p>
        </div>
        <hr class="w-11/12 h-0.5 bg-gray-500 mx-auto my-3">
        <div class="flex justify-between m-4">
            <div>
                <h5 class="mb-2 text-2xl font-bold">${value.name}</h5>
                <p class="font-medium text-gray-600"><i class="fa-solid fa-calendar-days mr-2"></i>${value.published_in}</p>
            </div>
            <div class="flex h-9 w-9 rounded-full items-center bg-red-200">
                <i class="fa-solid text-red-500 m-2 fa-arrow-right"></i>
            </div>
        </div>
    </div>
        `
       cardContainer.appendChild(div)
    })
}

fetchAllData()