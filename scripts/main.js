
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
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
  createText("Welcome to petervandoorn.com <br> Last login: Thu Jun  2 14:54:22 on ttys000<br>type a command to get started");
  await delay(700);
  createText("");
  await delay(1000);

  new_line();
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
    createCode("clear - clean up the terminal", "");
  }
  else if(value.toLowerCase() === "projects"){
    trueValue(value);
    createText("Here are my most recent projects")
    createCode("<hr><br>Bussie", "<br>Bussie is a work in progress. The idea is that you can see all public transport live location near you, so you can decide whether to get a cup of coffee or run for your train. Check out my proof of concept: <a href='https://two-trick-pony-nl-bussie-analytics-dashboard-szt85z.streamlit.app/'>here</a><br><br> #AWS #FastAPI #Python #ReactNative #Streamlit");
    createCode("<img src=\"images/bussie.png\" width=\"600\" alt=\"bussiepreview\">","Dashboard with vehicle locations");
    createCode("<hr><br>Lullaby AI", "<br>Lullaby AI generates custom bedtime stories for kids using ChatGPT it then creates illustrations with Dall-E  Check out my proof of concept: <a href='https://github.com/two-trick-pony-NL/LullabAI'>here</a><br><br> #ChatGPT #Dall-E #Python #Flask #AI");
    createCode("<img src=\"images/lullabyai.gif\" width=\"600\"  alt=\"lullabyaipreview\">","");
    createCode("<hr><br>Citizen Science NL", "<br>For Citizen Science NL I created some dynamic data fetching for their wordpress page, as well as kickstart a brand new website on Django</a><br><br> #AWS #Django #Python #bootstrap #wordpress ");
    createCode("<img src=\"images/csnl.png\" width=\"600\"  alt=\"csnlpreview\">","Homepage");
    createCode("<hr><br>Photo Scavenger", "<br>Photo Scavenger is a game I designed and built. You earn points by finding and photographing objects in your house. For instance: Scan a person, or a plant. Objects are detected with AI and analyzed on a custom backend. The game itself runs natively on your smartphone. Check it out: <a href='https://photoscavenger.petervandoorn.com'>here</a><br><br> #Heroku #FastAPI #Python #ReactNative #AI #MachineLearning");
    createCode("<img src=\"images/photoscavenger.png\" width=\"400\"  alt=\"photoscavengerlogo\">","Logo");
    createCode("<img src=\"images/photoscavenger.gif\" width=\"250\"  alt=\"photoscavengergameplaypreview\">","In app object detection");
    createCode("<hr><br>Franklyapp", "<br>Frankly is a custom built feedback collection platform written in Python. I built the whole platform myself from scratch. Check it out: <a href='https://github.com/two-trick-pony-NL/Frankly'>here</a><br><br> #AWSLightsail #Docker #Flask #Python #Matomo #Gunicorn #TwilioAPI #SQL");
    createCode("<img src=\"images/frankly1.png\" width=\"400\"  alt=\"franklypreview\">","Homepage");
    createCode("<img src=\"images/frankly2.png\" width=\"400\"  alt=\"franklypreview\">","Dashboard");
    createCode("<hr><br>InstaRecipe", "<br>InstaRecipe serves 12.000 recipes instantly. This was a portfolio project to keep up with modern webdevelopment. Check it out: <a href='https://github.com/two-trick-pony-NL/InstaRecipe'>here</a> <br><br> #AWSLightsail #Docker #Flask #Python #Matomo #Gunicorn");
    createCode("<img src=\"images/instarecipe.png\" width=\"400\"  alt=\"instarecipepreview\">","Recipe page");
    createCode("<hr><br>bunq", "<br>Various projects, from KYC/EDD automation, slashing time required to open a bank account to near-instant. To new product launches including iDin, Instant Payments, Zapier and OCR Receipt scanner in the bunq app.<br><br>#AWS #NativeApp #Fintech #unicorn#asknicely #Kibana #mixpanel");
    createCode("<img src=\"images/bunq.png\" width=\"250\"  alt=\"bunq\">","");
    createCode("<hr><br>Cybersprint", "<br>Redesign and implementation a brand new user interface for the Cybersecurity platform. While rebuilding the platform proper Scrum and Agile methodology were implemented, increasing the velocity by as much as 30%. <br><br> #Vue.js #Django");
    createCode("<img src=\"images/cybersprint.png\" width=\"250\"  alt=\"cybersprint\">","");
    createCode("<hr><br>Friss", "<br>Leading a multidisciplinary team tasked to overhaul the Friss Fraud Detection platform. Unifying look, feel and functionality across the board while updating systems to use the latest technologies.<br><br>#Matomo #Azure #Elastic Vue.js");
    createCode("<img src=\"images/friss.png\" width=\"250\"  alt=\"friss\">","");
    createCode("<hr><br>Corinahorstman.nl", "<br>Freelance project designing and building a landing page for Psychotherapist Corina Horstman. Check it out: <a href='https://corinahorstman.nl'>here</a> <br><br>#Wordpress");
    createCode("<img src=\"images/corinahorstman.png\" width=\"400\"  alt=\"corinahorstmanpreview\">","Dashboard");
    createCode("<hr><br>Growthtribe", "<br>2 day course on growth strategies and conversion optimalisation <br><br>#GrowthTribe");
    createCode("<hr><br>Keerzeven.nl", "<br>Freelance Design, hosting and implementation of a landing page for Keerzeven.nl. In 2023 we started working on a homework planner app in React Native.><br><br>#Wordpress");
    createCode("<img src=\"images/keerzeven.png\" width=\"400\"  alt=\"keerzevenpreview\">","Homepage");
    createCode("<hr><br>Lovely Workout", "<br>Analysis of visitor behaviour, popular links, bounce rates, user engagement and conversion funnels. Improving marketing campaign performance and improving leads by collecting user analytics across the website and landing pages.<br><br> #matomo #wordpress #microsoftclarity");
    createCode("<hr><br>Lucevankempen.com", "<br>Hosting webpage and email.<br><br> #wordpress");
    createCode("<hr><br>Github", "<br>Some of these projects have been documented on my Github, check it out: <a href='https://github.com/two-trick-pony-NL' target='_blank'> <i class='fab fa-github white'></i> https://github.com/two-trick-pony-NL</a>")
  }

  else if(value.toLowerCase() === "about"){
    trueValue(value);
    createText(" 👋🏻 Hi! my name is Peter, I take on tech challenges")
    createText("I have over 5 years of experience as a product owner working for tech companies like bunq, Cybersprint and Friss while also doing Freelance work and helping friends and family with the tech-side of their passion projects. Over the last years I have specialised in UX/UI and user interface design, but any tech project goes really! I love data driven decision making as it levels most arguments. I code in python and am familiar with tools like:<br><br> <ul>Docker</ul> <ul>Wordpress</ul><ul>AWS</ul> <ul>Mixpanel</ul> <ul>Matomo</ul> <ul>Github</ul> <ul>Jira</ul> and many more")
    createText("If you want to see some of my latest projects type: <i>projects</i>, or type <i>Freelance</i> if you want to work with me")
    createText("Type <i>contact</i> to get in touch")
  }
  else if(value.toLowerCase() === "freelance"){
    trueValue(value);
    createText(" 👋🏻 Hi! my name is Peter, I take on tech challenges")
    createText("I am most comfortable in the role of product owner. My expertise is what happens between business objective and working product. I start every project with a BI and market analysis and wrap up with user feedback, in the middle I fascilitate agile software development as product owner.")
    createText("Next to Product Owner, I have experience as Trainer and doing research, or writing the code that is needed to get the job done.")
    createText("I'm registered as freelancer at the Chamber of commerce under: 89010701. If you'd like to hire me for your project then reach out to scope out your project.")
    createText("Type <i>projects</i> to see what projects I have worked on or type <i>contact</i> to get in touch")
  }
  else if(value.toLowerCase() === "hello"){
    trueValue(value);
    createText(" 👋🏻 Hi there! How are you doing? My name is Peter, I take on tech challenges")
    createCode("","Here are the commands that you can use on this page:");
    createCode("projects - For my latest projects", "");
    createCode("about - Me, in a nutshell", "");
    createCode("freelance - If you want me to come work for you", "");
    createCode("contact - To get in touch with me", "");
    createCode("repo - Straight to my Github, do not pass start", "");
    createCode("game - Work hard play hard, right?", "");
    createCode("clear - clean up the terminal", "");
  }
  else if(value.toLowerCase() === "contact"){
    trueValue(value);
    createText("<a href='https://github.com/two-trick-pony-NL' target='_blank'><i class='fab fa-github white'></i> Github</a>")
    createText("<a href='https://www.linkedin.com/in/petervdoorn/' target='_blank'><i class='fab fa-linkedin-in white'></i> LinkedIn</a>")
    createText("<a href='https://www.instagram.com/two.trick.pony_/' target='_blank'><i class='fab fa-instagram white'></i> Instagram</a>")
    createText("<a href='mailto:peter@petervandoorn.com' target='_blank'><i class='fas fa-envelope white'> Drop me a line at hello@petervandoorn.com</a>")
    createText("My KvK (chamber of commerce) number is: 89010701.")
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
