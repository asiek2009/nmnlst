import { cutDescription } from "./_description.js";
import { circleLoading } from "./_circle.js";
import { textLoading } from "./_text.js";
import { hamburgerMenu } from "./_hamburgerMenu.js";

cutDescription();
hamburgerMenu();
setTimeout(circleLoading, 500);
setTimeout(textLoading, 1500);
