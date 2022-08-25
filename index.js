

const body = document. querySelector('body');
console.log(body);

const header = document.createElement('header');
header.classList.add('primary-header');
header.classList.add('flex');

header.innerHTML = `<div class="logo">
                        <img src="./assets/nav_logo.svg" alt="Space Logo">
                    </div>
                    <nav>
                        <ul class="primary-navigation underline-indicators flex">
                            <li class="active"><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="index.html"><span>00</span>Home</a></li>
                            <li><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="destination.html"><span>01</span>Destination</a></li>
                            <li><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="crew.html"><span>02</span>Crew</a></li>
                            <li><a class="ff-sans-cond uppercase text-white letter-spacing-2" href="technology.html"><span>03</span>Technology</a></li>
                        </ul>
                    </nav>
                    `;

body.appendChild(header);

const container = document.createElement('div');
container.classList.add('grid-container');

container.innerHTML = `
                    <div>
                        <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
                            So, you want to travel to
                        <span class="fs-900 ff-serif text-white">Space</span>
                        </h1>
                        <p>
                            Let’s face it; if you want to go to space, you might as well genuinely go to 
                            outer space and not hover kind of on the edge of it. Well sit back, and relax 
                            because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                    <div>
                        <a href="#" class="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</a> 
                    </div>
                    `

body.appendChild(container);


