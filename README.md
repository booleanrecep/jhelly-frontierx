# Awesome FrontierX

Rrun the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### API routes `/api/data`
`reponse`
```js
{
    "data": [
        {
            "img": "https://www.tagesschau.de/wirtschaft/marktueberblick/usa-nyse-wall-street-dow-marktbericht-105~_v-klein1x1.jpg",
            "title": "US-Anleger wieder etwas mutiger",
            "date": "4/5"
        },
        {
            "img": "https://www.tagesschau.de/ardimport/regional/niedersachsen/ndr-niedersachsen-image-150451~_v-klein1x1.jpg",
            "title": "Mord an Schülerin: 13- und 14-Jährige schweigen weiter",
            "date": "4/5"
        },
        {
            "img": "https://www.tagesschau.de/multimedia/bilder/robert-habeck-157~_v-klein1x1.jpg",
            "title": "Habeck sieht Gefahr eines Dominoeffekts",
            "date": "4/5"
        },
        {
            "img": "https://www.tagesschau.de/multimedia/bilder/lyssytschansk-107~_v-klein1x1.jpg",
            "title": "++ Russische Truppen am Rand von Lyssytschansk ++ ",
            "date": "4/5"
        },
        ...
    ],
    "status": true,
    "message": "Data fetched successfully"
}
```