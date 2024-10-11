
<p align="center"><a href="https://vuejs.org/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" width="400"></a></p> <p align="center"> <img src="https://img.shields.io/badge/project-DeliveBoo-brightgreen" alt="Project Status"> <img src="https://img.shields.io/badge/vue-3.x-blue" alt="Vue.js 3.x" /> <img src="https://img.shields.io/badge/laravel-10.x-red" alt="Laravel 10.x" /> <img src="https://img.shields.io/badge/bootstrap-5.x-orange" alt="Bootstrap 5.x" /> <img src="https://img.shields.io/badge/npm-7.x-yellow" alt="NPM 7.x" /> <br> <img src="https://img.shields.io/badge/license-MIT-blue" alt="License MIT" /> </p>
DeliveBoo
DeliveBoo è una piattaforma di food delivery che consente agli utenti di ordinare cibo dai ristoranti locali. Il progetto è stato realizzato per mettere in pratica e migliorare le mie competenze in Vue.js e Laravel, concentrandomi sull'integrazione front-end/back-end e la creazione di un'app web reattiva e scalabile.

Tecnologie Utilizzate
Vue.js 3.x: Per creare un'interfaccia utente dinamica e reattiva.
Laravel 10.x: Backend robusto per la gestione di utenti, ristoranti e ordini.
Bootstrap 5.x: Framework CSS per un layout responsivo e moderno.
Animate.css: Aggiunta di animazioni per migliorare l'esperienza utente.
Vite: Bundler per ottimizzare il caricamento delle risorse.
Funzionalità Principali
Autenticazione degli utenti: Implementata con Laravel, permette agli utenti di registrarsi, fare login e gestire il proprio account.
Carrello della spesa: Completamente dinamico, con aggiornamenti in tempo reale tramite Vue.js.
Responsività: Grazie a Bootstrap e CSS personalizzati, l'interfaccia si adatta perfettamente a dispositivi di diverse dimensioni.
Gestione ordini: Gli utenti possono navigare tra diversi ristoranti, aggiungere prodotti al carrello e finalizzare un ordine con pochi click.
Lezioni Apprese
Durante lo sviluppo di DeliveBoo, ho approfondito l'uso combinato di Vue.js e Laravel, migliorando la mia capacità di creare applicazioni web performanti e facilmente manutenibili. Ho imparato a gestire in modo efficiente il passaggio di dati tra front-end e back-end, oltre a migliorare la struttura del codice per una migliore leggibilità e manutenzione.

Setup Iniziale
Segui questi passi per configurare il progetto in locale:

Clona la repository
bash
 
git clone https://github.com/FilippoBonanno/DeliveBoo-Front.git
Entra nella cartella del progetto e installa le dipendenze NPM:
bash
 
npm install
Installa le dipendenze di Laravel con Composer:
bash
 
composer install
Crea un file .env copiandolo da .env.example e aggiorna le configurazioni per il database.
Genera una chiave di applicazione per Laravel:
bash
 
php artisan key:generate
Esegui le migrazioni e i seeder:
bash
 
php artisan migrate:fresh --seed
Avvia il server di sviluppo:
bash
 
php artisan serve
Avvia Vite per la gestione delle risorse front-end:
bash

npm run dev
Demo e Screenshot
Puoi vedere una demo live qui oppure guarda uno screenshot dell'interfaccia:

<p align="center"> <img src="screenshot.png" alt="Interfaccia Utente di DeliveBoo" width="600"> </p>
Risorse CRUD
Per creare un nuovo model, controller, migration e seeder in un unico comando:

bash
 
php artisan make:model NomeModello -rmsR

Contatti
LinkedIn: Filippo Bonanno
Email: filippo.bonanno@example.com