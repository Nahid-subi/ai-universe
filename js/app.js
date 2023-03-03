// loader 6 data fetch
const fetchSixData = () =>{
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displaySixData(data.data.tools))
};
// display 6 data function
const displaySixData = (data) => {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    data.slice(0,6).forEach((value) =>{
        // console.log(value)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
        <div class="m-4">
            <img class="rounded-lg h-72 w-full" src="${value.image}" alt="" />
        </div>
        <div class="m-4">
            <h5 class="mb-2 text-2xl font-bold">Features</h5>
            <p class="mb-3 font-medium text-gray-600">1.${value.features[0]}<p>
            <p class="mb-3 font-medium text-gray-600">2.${value.features[1]}<p>
            <p class="mb-3 font-medium text-gray-600">3.${value.features[2] ? value.features : 'Not Available'}<p>
        </div>
        <hr class="w-11/12 h-0.5 bg-gray-500 mx-auto my-3">
        <div class="flex justify-between m-4">
            <div>
                <h5 class="mb-2 text-2xl font-bold">${value.name}</h5>
                <p class="font-medium text-gray-600"><i class="fa-solid fa-calendar-days mr-2"></i>${value.published_in}</p>
            </div>
            <div class="flex h-9 w-9 rounded-full items-center bg-red-200">
            <label for="my-modal-3" onclick="openModalFetch('${value.id}')"><i class="fa-solid text-red-500 m-2 fa-arrow-right"></i></label>
            </div>
            
        </div>
    </div>
        `
       cardContainer.appendChild(div)
    })
    // stop loader
    const loaderSection = document.getElementById('loader');
    loaderSection.classList.add('hidden')
}

// click see more this function working start
// loader all data fetch
const fetchAllData = () =>{
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayAllData(data.data.tools))
};
// display all data function
const displayAllData = (data) => {
    const showAll = document.getElementById("showAll");
    showAll.classList.add('hidden');
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    data.forEach((value) =>{
        // console.log(value.id)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
        <div class="m-4">
            <img class="rounded-lg h-72 w-full" src="${value.image}" alt="" />
        </div>
        <div class="m-4">
            <h5 class="mb-2 text-2xl font-bold">Features</h5>
            <p class="mb-3 font-medium text-gray-600">1.${value.features[0]}<p>
            <p class="mb-3 font-medium text-gray-600">2.${value.features[1]}<p>
            <p class="mb-3 font-medium text-gray-600">3.${value.features[2] ? value.features : 'Not Available'}<p>
        </div>
        <hr class="w-11/12 h-0.5 bg-gray-500 mx-auto my-3">
        <div class="flex justify-between m-4">
            <div>
                <h5 class="mb-2 text-2xl font-bold">${value.name}</h5>
                <p class="font-medium text-gray-600"><i class="fa-solid fa-calendar-days mr-2"></i>${value.published_in}</p>
            </div>
            <div class="flex h-9 w-9 rounded-full items-center bg-red-200">  
        <label for="my-modal-3" onclick="openModalFetch('${value.id}')"><i class="fa-solid text-red-500 m-2 fa-arrow-right"></i></label>
            </div>
        </div>
    </div>
        `
       cardContainer.appendChild(div)
    })
}
// click see more this function working end

// click arrow and model open
const openModalFetch = (id) =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => modalDataShow(data.data))
}

const modalDataShow = (data) =>{
    console.log(data)
}

fetchSixData();





