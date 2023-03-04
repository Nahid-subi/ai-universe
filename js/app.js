// global fetch data variable
let fetchData = []
// loader 6 data fetch
const fetchSixData = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then((res) => res.json())
        .then((data) => {
            fetchData = data.data.tools;
            displaySixData(data.data.tools)
        });
};
// display 6 data function
const displaySixData = (data) => {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    data.slice(0, 6).forEach((value) => {
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
const fetchAllData = () => {
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
    data.forEach((value) => {
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
const openModalFetch = (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => modalDataShow(data.data))
}
// this function for display modal
const modalDataShow = (data) => {
    const containerModel = document.getElementById("containerModel");
    containerModel.innerHTML = '';
    const div = document.createElement('div')
    div.innerHTML = `
    
    <div class=" gap-4 flex lg:flex-row md:flex-col flex-col">
    <div class="lg:w-1/2 w:full md:full border my-12 border-red-600 bg-red-50 rounded-lg">
        <div>                   
            <p class="font-semibold text-base lg:text-lg md:text-lg">${data.description}</p>
        </div>
        <div
            class="flex flex-wrap justify-center md:justify-evenly gap-2 lg:justify-evenly my-5">
            <div
                class="bg-white text-green-600 w-24 h-20 font-bold rounded-lg flex flex-col justify-center items-center">
                <p>${(data.pricing === null) && 'No data Found' ? 'No data Found' : data.pricing[0].plan}</p>
                <p>${(data.pricing === null) && 'No data Found' ? 'No data Found' : (data.pricing[0].price === '0' || data.pricing[0].price === 'No cost') && 'free of cost' ? 'free of cost' : data.pricing[0].price}
                </p>
            </div>
            <div
                class="bg-white text-amber-600 w-24 h-20 font-bold rounded-lg flex flex-col justify-center items-center">
                <p>${(data.pricing === null) && 'No data Found' ? 'No data Found' : data.pricing[1].plan}</p>
                <p>${((data.pricing === null) && 'No data Found' ? 'No data Found' : data.pricing[1].price === '0' || data.pricing[1].price === 'No cost') && 'free of cost' ? 'free of cost' : data.pricing[1].price}
                </p>
            </div>
            <div
                class="bg-white text-red-500 w-24 h-20 font-bold rounded-lg flex flex-col justify-center items-center">
                <p>${(data.pricing === null) && 'No data Found' ? 'No data Found' : data.pricing[2].plan}</p>
                <p>${(data.pricing === null) && 'No data Found' ? 'No data Found' : (data.pricing[1].price === '0' || data.pricing[1].price === 'No cost') && 'free of cost' ? 'free of cost' : data.pricing[2].price}</p>
            </div>
        </div>
        <div class="flex gap-4 flex-wrap justify-center">
            <div>
                <h3 class="font-semibold text-lg">Features</h3>
                <li class="font-medium text-gray-600">${(Object.values(data.features[1])[0])}</li>
                <li class="font-medium text-gray-600">${(Object.values(data.features[2])[0])}</li>
                <li class="font-medium text-gray-600">${(Object.values(data.features[3])[0])}</li>
            </div>
            <div>
                <h3 class="font-semibold text-lg">Integrations</h3>
                <li class="font-medium text-gray-600">${(data.integrations === null) && 'No data Found' ? 'No data Found' : (Object.values(data.integrations)[0])}</li>
                <li class="font-medium text-gray-600" style="${data.integrations === null || (Object.values(data.integrations)[2] === undefined) ? 'display: none' : ''}">${(data.integrations === null) && 'No data Found' ? 'No data Found' : (Object.values(data.integrations)[1] === undefined) && 'No data Found' ? 'No data Found' : Object.values(data.integrations)[1]}</li>
                <li class="font-medium text-gray-600" style="${data.integrations === null || (Object.values(data.integrations)[2] === undefined) ? 'display: none' : ''}">${(data.integrations === null) && 'No data Found' ? 'No data Found' : (Object.values(data.integrations)[2] === undefined) && 'No data Found' ? 'No data Found' : Object.values(data.integrations)[2]}</li>
            </div>

        </div>
    </div>
    <div class="lg:w-1/2 w-full md:w-full border border-slate-400 my-12 rounded-lg">
        <div class="relative">
            <img class="h-72 w-full rounded-lg" src="${data.image_link[0]}" alt="">
            <div class="absolute bottom-64 left-2/3" style="${data.accuracy.score === null ? 'display: none' : ''}">
        <p class="bg-red-500 rounded-lg text-white font-semibold px-2">
    ${data.accuracy.score === null ? 'No data found' : `${data.accuracy.score * 100}% accuracy`}
    </p>
    </div>

        </div>
        <div class="my-2">
            <h1 class="font-semibold text-lg text-center">${(data.input_output_examples
            === null) && 'No data Found' ? 'No data Found' : data.input_output_examples[0].input}</h1>
            <p class="font-medium text-gray-600 text-center">${(data.input_output_examples
            === null) && 'No data Found' ? 'No data Found' : data.input_output_examples[0].output}</p>
        </div>
    </div>
</div>
    `
    containerModel.appendChild(div)
}

fetchSixData();

// this function for display modal end

// short by date end start

const showDataBYShortByDate = () => {
    const sortedArray = fetchData.sort((a, b) => Date.parse(new Date(a.published_in)) - Date.parse(new Date(b.published_in)));
    displayAllData(sortedArray);
}

// short by date end