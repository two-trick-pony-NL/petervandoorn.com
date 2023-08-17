
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));

function autoType(text) {
  const p = document.createElement("p");
  p.classList.add("autotyped-text");
  app.appendChild(p);

  let index = 0;
  const interval = setInterval(function () {
    p.textContent += text[index];
    index++;
    if (index === text.length) {
      clearInterval(interval);
    }
  }, 100);
}
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome to petervandoorn.com <br> Last login: Thu Jun  2 14:54:22 on ttys000");
  await delay(700);
  createText("");
  new_line();
  autoType("Start typing  here to start exploring!");  
  await delay(7000)
  autoType("try: ");
  await delay(1500)
  autoType("hello 👋🏻, about 👱🏼‍♂️, projects 🏗️, contact 📫, game 🕹️")
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "guest@petervandoorn.com";
  span1.textContent = " ~ ";
  span2.textContent = "   $";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);

  // Add an event listener to the input field to remove the autotyped text
  input.addEventListener("input", function () {
    const autotypedText = document.querySelector(".autotyped-text");
    if (autotypedText) {
      autotypedText.remove();
    }
  });

  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value.toLowerCase() === "help"){
    trueValue(value);
    createCode("","Help -- Here are the commands that you can use:");
    createCode("projects - For my latest projects", "");
    createCode("about - Me, in a nutshell", "");
    createCode("freelance - If you want me to come work for you", "");
    createCode("contact - To get in touch with me", "");
    createCode("repo - Straight to my Github, do not pass start", "");
    createCode("game - Work hard play hard, right?", "");
    createCode("blog - Check out my blogposts on projects I am working on", "");
    createCode("clear - clean up the terminal", "");
  }
  else if(value.toLowerCase() === "projects"){
    trueValue(value);
    createText("Here are my most recent projects");
    createCode("<hr><br>Bussie", "<br>Bussie is an ongoing project that aims to provide real-time public transport location information in your vicinity. This helps you decide whether to grab a coffee or rush for your train. Explore my proof of concept: <a href='https://two-trick-pony-nl-bussie-analytics-dashboard-szt85z.streamlit.app/' target='_blank'>here</a><br><br> #AWS #FastAPI #Python #ReactNative #Streamlit");
    createCode("<img src=\"images/bussie.png\" width=\"600\" alt=\"bussiepreview\">","Dashboard displaying vehicle locations");
    createCode("<hr><br>Lullaby AI", "<br>Lullaby AI generates personalized bedtime stories for kids using ChatGPT, accompanied by illustrations created with Dall-E. Check out my proof of concept: <a href='https://github.com/two-trick-pony-NL/LullabAI' target='_blank'>here</a><br><br> #ChatGPT #Dall-E #Python #Flask #AI");
    createCode("<img src=\"images/lullabyai.gif\" width=\"600\"  alt=\"lullabyaipreview\">","");
    createCode("<hr><br>Citizen Science NL", "<br>I created dynamic data fetching for Citizen Science NL's WordPress page and initiated a new website using Django.<br><br> #AWS #Django #Python #bootstrap #wordpress ");
    createCode("<img src=\"images/csnl.png\" width=\"600\"  alt=\"csnlpreview\">","Homepage");
    createCode("<hr><br>Photo Scavenger", "<br>Photo Scavenger is a game I designed and built. Players earn points by finding and photographing objects in their homes, detected using AI and analyzed on a custom backend. The game runs natively on smartphones. Check it out: <a href='https://photoscavenger.petervandoorn.com' target='_blank'>here</a><br><br> #Heroku #FastAPI #Python #ReactNative #AI #MachineLearning");
    createCode("<img src=\"images/photoscavenger.png\" width=\"400\"  alt=\"photoscavengerlogo\">","Logo");
    createCode("<img src=\"images/photoscavenger.gif\" width=\"250\"  alt=\"photoscavengergameplaypreview\">","In-app object detection");
    createCode("<hr><br>Franklyapp", "<br>Franklyapp is a custom-built feedback collection platform written in Python. I built the entire platform from scratch. Check it out: <a href='https://github.com/two-trick-pony-NL/Frankly' target='_blank'>here</a><br><br> #AWSLightsail #Docker #Flask #Python #Matomo #Gunicorn #TwilioAPI #SQL");
    createCode("<img src=\"images/frankly1.png\" width=\"400\"  alt=\"franklypreview\">","Homepage");
    createCode("<img src=\"images/frankly2.png\" width=\"400\"  alt=\"franklypreview\">","Dashboard");
    createCode("<hr><br>InstaRecipe", "<br>InstaRecipe instantly provides access to 12,000 recipes. It's a portfolio project aimed at modern web development. Explore it: <a href='https://github.com/two-trick-pony-NL/InstaRecipe' target='_blank'>here</a><br><br> #AWSLightsail #Docker #Flask #Python #Matomo #Gunicorn");
    createCode("<img src=\"images/instarecipe.png\" width=\"400\"  alt=\"instarecipepreview\">","Recipe page");
    createCode("<hr><br>bunq", "<br>I've worked on various projects for bunq, including KYC/EDD automation and product launches like iDin, Instant Payments, Zapier, and OCR Receipt Scanner in the bunq app. As well as trained employees on start-up mindsets as cultural evengalist.<br><br>#AWS #NativeApp #Fintech #unicorn#asknicely #Kibana #mixpanel");
    createCode("<img src=\"images/bunq.png\" width=\"250\"  alt=\"bunq\">","");
    createCode("<hr><br>Cybersprint", "<br>I led the redesign and implementation of a new user interface for the Cybersprint cybersecurity platform. The rebuild incorporated Scrum and Agile methodologies, increasing velocity by up to 30%.<br><br> #Vue.js #Django");
    createCode("<img src=\"images/cybersprint.png\" width=\"250\"  alt=\"cybersprint\">","");
    createCode("<hr><br>Friss", "<br>I led a multidisciplinary team to overhaul the Friss Fraud Detection platform. I unified the look, feel, and functionality while updating systems with the latest technologies.<br><br>#Matomo #Azure #Elastic Vue.js");
    createCode("<img src=\"images/friss.png\" width=\"250\"  alt=\"friss\">","");
    createCode("<hr><br>Corinahorstman.nl", "<br>I designed and built a landing page for Psychotherapist Corina Horstman. Explore it: <a href='https://corinahorstman.nl' target='_blank'>here</a> <br><br>#Wordpress");
    createCode("<img src=\"images/corinahorstman.png\" width=\"400\"  alt=\"corinahorstmanpreview\">","Dashboard");
    createCode("<hr><br>Growthtribe", "<br>I participated in a 2-day course on growth strategies and conversion optimization. <br><br>#GrowthTribe");
    createCode("<hr><br>Keerzeven.nl", "<br>I engaged in freelance design, hosting, and implementation of a landing page for Keerzeven.nl. In 2023, I started working on a React Native homework planner app.<br><br>#Wordpress");
    createCode("<img src=\"images/keerzeven.png\" width=\"400\"  alt=\"keerzevenpreview\">","Homepage");
    createCode("<hr><br>Lovely Workout", "<br>I analyzed visitor behavior, improved marketing campaigns, and increased leads by collecting user analytics across the website and landing pages.<br><br> #matomo #wordpress #microsoftclarity");
    createCode("<hr><br>Lucevankempen.com", "<br>I provided hosting for the webpage and email.<br><br> #wordpress");
    createCode("<hr><br>Github", "<br>Some of these projects are documented on my Github. Check it out: <a href='https://github.com/two-trick-pony-NL' target='_blank'> <i class='fab fa-github white'></i> https://github.com/two-trick-pony-NL</a>");
  }
  else if(value.toLowerCase() === "freelance" || value.toLowerCase() === "about") {
    trueValue(value);
    createCode("<div style=\"text-align: center;\">","<img src=\"images/avatar.jpeg\" width=\"200\" height=\"200\" alt=\"Peter\" style=\"border-radius: 50%;\">","</div>");    
    createText(" 👋🏻 Hi! my name is Peter, I take on tech challenges")
    createText("My comfort zone lies within the role of a product owner. I specialize in bridging the gap between business objectives and functional products. My project approach involves kicking off with a business case and concluding with usage feedback and a performance dashboard. Whether you call it scrum or agile: I facilitate no-nonsense software development focused on outcome.")
    createText("Beyond my role as a Product Owner, I have served as a culture consultant at bunq, teaching skills and mindset to both fresh graduates and seasoned professionals, enabling them to keep delivering outcome in a fast paced startup environment. If it's code you need then I am proficient coding in Python (Django/FastAPI) and React Native (Expo).")
    createText("You can find me registered as a freelancer at the Chamber of Commerce under the number: 89010701. If you're interested in my services (Consulting, product or coding), don't hesitate to get in touch to discuss the scope of your project.")
    createText("To view a list of projects I've been involved in, type <i>projects</i>. If you wish to get in touch, type <i>contact</i>.")
  }
  else if(value.toLowerCase() === "hello"){
    trueValue(value);
    createCode("<div style=\"text-align: center;\">","<img src=\"images/avatar.jpeg\" width=\"200\" height=\"200\" alt=\"Peter\" style=\"border-radius: 50%;\">","</div>");    
    createText(" 👋🏻 Hi there! How are you doing?")
    createText("My name is Peter, I take on tech challenges. Here are the commands that you can use on this page:");
    createCode("projects - For my latest projects", "");
    createCode("about - Me, in a nutshell", "");
    createCode("freelance - If you want me to come work for you", "");
    createCode("contact - To get in touch with me", "");
    createCode("repo - Straight to my Github, do not pass start", "");
    createCode("game - Work hard play hard, right?", "");
    createCode("clear - clean up the terminal", "");
  }
  else if(value.toLowerCase() === "blog"){
    trueValue(value);
    createText(" 👋🏻 I keep a blog that goes into more depth on the projects I worked on.")
    createText("<a href='https://petervandoorn.vercel.app/' target='_blank'> Read it here</a>")
  }
  else if(value.toLowerCase() === "contact"){
    trueValue(value);
    createText("<i class='fas fa-envelope white'></i> freelance@petervandoorn.com")
    createText("<i class='fas fa-phone white'></i> +316 10468353")
    createText("<a href='https://github.com/two-trick-pony-NL' target='_blank'><i class='fab fa-github white'></i> Github</a>")
    createText("<a href='https://www.linkedin.com/in/petervdoorn/' target='_blank'><i class='fab fa-linkedin-in white'></i> LinkedIn</a>")
    createText("<a href='https://petervandoorn.vercel.app/' target='_blank'><i class='fas fa-newspaper white'></i> Blog</a>")
    createText("<i class='fas fa-building white'></i> KvK number is: 89010701")
  }
  
  else if(value.toLowerCase() === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else if(value.toLowerCase().includes("sudo")){
    createText("Nope, did you <i>really</i> think we let you become super user?")
  }
  else if(value.includes("rm -rf")){
    createText("Deleting all the files, /jk")
  }
  else if(value.toLowerCase() === "pwd"){
    createText("/petervandoorn/homepage/index.html")
    
  }
  else if(value.toLowerCase() === "repo"){
    createText("<a href='https://github.com/two-trick-pony-NL' target='_blank'><i class='fab fa-github white'></i> Github</a>")
    
  }
  else if(value.toLowerCase() === "status"){
    createText("<a href='https://two-trick-pony-nl.github.io/upptime/' target='_blank'><i class='fab fa-github white'></i> Upptime dashboard</a>")
    
  }
  else if(value.toLowerCase().includes("cd")){
    createText("/petervandoorn/homepage")
  }
  
  else if(value.toLowerCase() === "ls"){
    createText("LICENSE<br>README.md<br>index.html<br>scripts<br>style.css")
  }
  else if(value.toLowerCase().includes("cat")){
    createText("Meow! &#x1f408;")
  }
  else if(value.toLowerCase().includes("mendel")){
    createText("<div style='width:75%'><div style='height:0;padding-bottom:75.15625%;position:relative;width:75%'><iframe allowfullscreen='' frameBorder='0' height='75%' src='https://giphy.com/embed/7bU683xtQXPcEyP020/video' style='left:0;position:absolute;top:0' width='100%'></iframe></div></div>")
  }

  else if(value.toLowerCase().includes("game")){
    createText("<iframe src='https://dwmkerr.github.io/spaceinvaders/' width=100% height='500'frameBorder='0'></iframe>")
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
    createText("Type help to see a list of commands or try one of these:");
    createText("<ul>about</ul><ul>projects</ul><ul>cat</ul><ul>sudo</ul><ul>game</ul><ul>freelance</ul>");
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
