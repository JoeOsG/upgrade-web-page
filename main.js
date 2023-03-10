const header = document.createElement('header');
header.id = 'head';
const headerContent = document.createTextNode("");
header.appendChild(headerContent);
document.body.appendChild(header);

const nav = document.createElement('nav');
const navContent = document.createTextNode("YOUR PEACE OF MIND IS OUR BUSINESS");
nav.appendChild(navContent);
document.body.appendChild(nav);

const firstSection = document.createElement('section');
const listSection = document.createElement('ul');
const firstElementList = document.createTextNode(" Telehealth ervices in California *SE HABLA ESPAÑOL*");
const secondSectionContent = document.createTextNode(" Dr Ana Popoca - Logue");
const thirdSectionContent = document.createTextNode(" DNP Doctor of Nursing Practice,     Family & Psychiatric Mental Health Nurse Practitioner");
firstSection.appendChild(listSection);
firstSection.appendChild(secondSectionContent);
document.body.appendChild(firstSection);

const article = document.createElement('article');
const articleContent = document.createTextNode("more");
article.appendChild(articleContent);
document.body.appendChild(article);

const aside = document.createElement('aside');
const asideContent = document.createTextNode("article");
aside.appendChild(asideContent);
document.body.appendChild(aside);

const footer = document.createElement('footer');
const footerContent = document.createTextNode("information");
footer.appendChild(footerContent);
document.body.appendChild(footer);