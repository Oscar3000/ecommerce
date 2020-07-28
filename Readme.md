An E-commerce store with .Net core as backend using mssql db and nextjs to power the frontend application. Everything is been run in a docker container.

scaffold web api controller: dotnet aspnet-codegenerator controller -name ProductController -m Product -api -async -dc ApplicationDbContext --relativeFolderPath Controllers


install font-awesome:
- yarn add @fortawesome/fontawesome-free
add to _app.js:
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";