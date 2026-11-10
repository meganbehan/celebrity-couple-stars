const couples = [
  { names: "Zendaya & Tom Holland", start: "2021", end: "Still together", status: "together", story: "After years of Spider-Man rumors, their romance became publicly undeniable in 2021. They have kept most details private while continuing to support each other publicly." },
  { names: "Taylor Swift & Travis Kelce", start: "2023", end: "Still together", status: "together", story: "Their relationship entered the public spotlight during the 2023 NFL season and became one of pop culture’s biggest crossover stories." },
  { names: "Kim Kardashian & Kanye West", start: "2012", end: "2021", status: "split", story: "Longtime friends turned couple in 2012, married in 2014, and publicly separated when Kardashian filed for divorce in 2021." },
  { names: "Brad Pitt & Angelina Jolie", start: "2005", end: "2016", status: "split", story: "The pair were publicly linked in 2005 and announced their split in 2016 after becoming one of the era’s defining celebrity couples." },
  { names: "Jennifer Aniston & Brad Pitt", start: "1998", end: "2005", status: "split", story: "They became a quintessential red-carpet couple after going public in 1998 and announced their separation in early 2005." },
  { names: "Britney Spears & Justin Timberlake", start: "1999", end: "2002", status: "split", story: "The turn-of-the-millennium pop superstars became an iconic young-Hollywood couple before their widely covered 2002 breakup." },
  { names: "Nicole Kidman & Tom Cruise", start: "1990", end: "2001", status: "split", story: "They met while filming Days of Thunder, married in 1990, and announced their separation in 2001." },
  { names: "Ariana Grande & Pete Davidson", start: "2018", end: "2018", status: "split", story: "Their whirlwind 2018 romance and engagement made headlines before the pair called it off later that year." }
];
const positions = [[9,15],[35,9],[68,17],[83,43],[18,55],[46,46],[70,70],[37,78]];
const sky = document.querySelector('#sky');
const reveal = document.querySelector('#reveal');
couples.forEach((couple, i) => {
  const star = document.createElement('button');
  star.className = 'star'; star.style.left = positions[i][0]+'%'; star.style.top = positions[i][1]+'%';
  star.innerHTML = `★<span>${couple.names}</span>`; star.setAttribute('aria-label', `Reveal ${couple.names}`);
  star.addEventListener('click', () => show(couple)); sky.append(star);
});
function show(c) {
  reveal.classList.remove('active'); void reveal.offsetWidth; reveal.classList.add('active');
  reveal.innerHTML = `<span class="spark">✦</span><div><h2 class="couple">${c.names}</h2><span class="status ${c.status}">${c.status === 'together' ? 'PUBLICLY REPORTED TOGETHER' : 'PUBLICLY REPORTED SPLIT'}</span><div class="dates"><span><b>PUBLICLY TOGETHER</b> ${c.start}</span><span><b>${c.status === 'together' ? 'STATUS' : 'PUBLICLY SPLIT'}</b> ${c.end}</span></div><p class="story">${c.story}</p></div>`;
}
