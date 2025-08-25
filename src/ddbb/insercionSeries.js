import { MongoClient } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

// Tu array de series
const series = [
    {
        id: uuidv4(),
        title: 'Dark',
        genero: ['Ciencia','Ficción','Suspenso','Tragedia'],
        añoLanzamiento: '2017',
        numeroEpisodios: '26',
        description: 'En el pueblo alemán de Winden, la desaparición de un niño revela secretos familiares y una conspiración de viajes en el tiempo que abarca generaciones.',
        thumbnail: 'https://www.tuttotech.net/wp-content/uploads/2019/06/DARK-serie-TV-Netflix.jpg',
        video: 'https://www.youtube.com/watch?v=rrwycJ08PSA',
        videoID: 'rrwycJ08PSA'
    },
    {
        id: uuidv4(),
        title: 'Stranger Things',
        genero: ['Suspenso','Ciencia ficción','Fantasía oscura'],
        añoLanzamiento: '2016',
        numeroEpisodios: '34',
        description: 'En Hawkins, Indiana, un niño desaparece y desata una serie de eventos sobrenaturales que involucran experimentos secretos, dimensiones paralelas y una niña con poderes.',
        thumbnail: 'https://wallpapers.com/images/featured/stranger-things-dkttxahzpl44tbsa.jpg',
        video: 'https://www.youtube.com/watch?v=b9EkMc79ZSU',
        videoID: 'b9EkMc79ZSU'
    },
    {
        id: uuidv4(),
        title: 'Cyberpunk: Edgerunners',
        genero: ['Cyberpunk', 'Ciencia ficción', 'Acción', 'Distopía'],
        añoLanzamiento: '2022',
        numeroEpisodios: '10',
        description: 'David Martínez, un joven marginado en una ciudad futurista obsesionada con la tecnología, se convierte en un edgerunner para sobrevivir en el submundo criminal de Night City.',
        thumbnail: 'https://wallpaperaccess.com/full/8855651.png',
        video: 'https://www.youtube.com/watch?v=KvMY1uzSC1E',
        videoID: 'KvMY1uzSC1E'
    },
    {
        id: uuidv4(),
        title: 'Sin City',
        genero: ['Acción', 'Crimen', 'Drama', 'Neo-noir'],
        añoLanzamiento: '2025',
        numeroEpisodios: 'Desconocido',
        description: 'Basada en la obra de Frank Miller, esta serie explora historias oscuras y violentas en la ciudad ficticia de Basin City, donde el crimen y la corrupción reinan.',
        thumbnail: 'https://wallpaperaccess.com/full/1744657.jpg',
        video: '',
        videoID: ''
    },
    {
        id: uuidv4(),
        title: 'Neon Genesis Evangelion',
        genero: ['Ciencia ficción', 'Drama psicológico', 'Mecha'],
        añoLanzamiento: '1995',
        numeroEpisodios: '26',
        description: 'En un mundo post-apocalíptico, adolescentes son reclutados para pilotar gigantes biomecánicos llamados EVA y luchar contra seres conocidos como Ángeles, mientras enfrentan sus propios traumas.',
        thumbnail: 'https://wallpapercave.com/wp/wp1927166.jpg',
        video: '',
        videoID: ''
    },
    {
        id: uuidv4(),
        title: 'Cowboy Bebop',
        genero: ['Animación', 'Acción', 'Ciencia ficción', 'Neo-noir', 'Western espacial'],
        añoLanzamiento: '1998',
        numeroEpisodios: '26',
        description: 'Ambientada en el año 2071, esta serie sigue a un grupo de cazarrecompensas que viajan por el espacio en su nave Bebop, enfrentando criminales, fantasmas del pasado y dilemas existenciales.',
        thumbnail: 'https://somoskudasai.net/wp-content/uploads/2020/06/portada_cowboy-bebop-3.jpg',
        video: 'https://www.youtube.com/watch?v=qig4KOK2R2g',
        videoID: 'qig4KOK2R2g'
    },
    {
        id: uuidv4(),
        title: 'Fullmetal Alchemist',
        genero: ['Animación', 'Fantástico', 'Aventuras', 'Acción', 'Steampunk'],
        añoLanzamiento: '2003',
        numeroEpisodios: '51',
        description: 'Los hermanos Edward y Alphonse Elric, tras un fallido intento de resucitar a su madre mediante alquimia, pagan un alto precio: Edward pierde un brazo y una pierna, y Alphonse su cuerpo entero. Unidos por el dolor y la esperanza, emprenden una búsqueda épica por la Piedra Filosofal para recuperar lo perdido.',
        thumbnail: 'https://wallpapercave.com/wp/fB42Y0H.jpg',
        video: 'https://www.youtube.com/watch?v=2uq34TeWEdQ',
        videoID: '2uq34TeWEdQ'
    },
    {
        id: uuidv4(),
        title: 'Prometheus',
        genero: ['Ciencia ficción', 'Terror', 'Aventura espacial'],
        añoLanzamiento: '2012',
        numeroEpisodios: 'Película',
        description: 'Finales del siglo XXI. Un grupo de científicos y exploradores viaja en la nave Prometheus a un planeta remoto en busca del origen de la vida en la Tierra. Lo que encuentran desafía sus creencias y pone en peligro a toda la humanidad.',
        thumbnail: 'https://images7.alphacoders.com/680/680417.jpg',
        video: 'https://www.youtube.com/watch?v=DEJ8i5eAUos',
        videoID: 'DEJ8i5eAUos'
    },{
        id: uuidv4(),
        title: 'Breaking Bad',
        genero: ['Drama', 'Crimen', 'Suspenso'],
        añoLanzamiento: '2008',
        numeroEpisodios: '62',
        description: 'Un profesor de química con cáncer terminal se convierte en fabricante de metanfetamina para asegurar el futuro de su familia, desatando una espiral de violencia y poder.',
        thumbnail: 'https://images4.alphacoders.com/111/thumb-1920-1111277.jpg',
        video: 'https://www.youtube.com/watch?v=HhesaQXLuRY',
        videoID: 'HhesaQXLuRY'
    },
    {
        id: uuidv4(),
        title: 'Game of Thrones',
        genero: ['Fantasía', 'Drama', 'Acción', 'Política'],
        añoLanzamiento: '2011',
        numeroEpisodios: '73',
        description: 'Nobles casas luchan por el control de los Siete Reinos de Westeros mientras una amenaza ancestral resurge desde el norte.',
        thumbnail: 'https://th.bing.com/th/id/R.6860e1753defc88c18fa971d0ea6209e?rik=8DJNreSloUFDaQ&pid=ImgRaw&r=0',
        video: 'https://www.youtube.com/watch?v=KPLWWIOCOOQ',
        videoID: 'KPLWWIOCOOQ'
    },
    {
        id: uuidv4(),
        title: 'The Mandalorian',
        genero: ['Ciencia ficción', 'Acción', 'Aventura', 'Western'],
        añoLanzamiento: '2019',
        numeroEpisodios: '24',
        description: 'Un cazarrecompensas solitario navega por los confines de la galaxia mientras protege a un misterioso niño con poderes especiales.',
        thumbnail: 'https://images.wallpapersden.com/image/download/the-mandalorian-2_bGhnbGyUmZqaraWkpJRoZ2VlrWZtaGk.jpg',
        video: 'https://www.youtube.com/watch?v=aOC8E8z_ifw',
        videoID: 'aOC8E8z_ifw'
    },
    {
        id: uuidv4(),
        title: 'The Witcher',
        genero: ['Fantasía', 'Acción', 'Drama'],
        añoLanzamiento: '2019',
        numeroEpisodios: '24',
        description: 'Geralt de Rivia, un cazador de monstruos mutado, lucha por encontrar su lugar en un mundo donde las personas a menudo son más crueles que las bestias.',
        thumbnail: 'https://images.wallpapersden.com/image/download/the-witcher-wolf-medallion_bWhmbGeUmZqaraWkpJRmbmdlrWZlbWU.jpg',
        video: 'https://www.youtube.com/watch?v=tjujvMkqWe4',
        videoID: 'tjujvMkqWe4'
    },
    {
        id: uuidv4(),
        title: 'Black Mirror',
        genero: ['Ciencia ficción', 'Psicológico', 'Antología'],
        añoLanzamiento: '2011',
        numeroEpisodios: '27',
        description: 'Cada episodio explora un futuro distópico donde la tecnología revela lo peor de la humanidad.',
        thumbnail: 'https://wallpapers.com/images/hd/black-mirror-poster-gbqux8n5pndwjdrn.jpg',
        video: 'https://www.youtube.com/watch?v=jDiYGjp5iFg',
        videoID: 'jDiYGjp5iFg'
    },
    {
        id: uuidv4(),
        title: 'Arcane',
        genero: ['Animación', 'Fantasía', 'Acción', 'Drama'],
        añoLanzamiento: '2021',
        numeroEpisodios: '9',
        description: 'En las ciudades de Piltover y Zaun, dos hermanas se enfrentan en medio de conflictos políticos, magia y tecnología.',
        thumbnail: 'https://wallpaperaccess.com/full/7731869.jpg',
        video: 'https://www.youtube.com/watch?v=fXmAurh012s',
        videoID: 'fXmAurh012s'
    },
    {
        id: uuidv4(),
        title: 'Peaky Blinders',
        genero: ['Drama', 'Crimen', 'Histórico'],
        añoLanzamiento: '2013',
        numeroEpisodios: '36',
        description: 'La familia Shelby dirige una banda criminal en Birmingham tras la Primera Guerra Mundial, enfrentándose a enemigos políticos y mafiosos.',
        thumbnail: 'https://rare-gallery.com/mocahbig/1345691-Thomas-Shelby-Cillian-MurphyPeaky-Blinders-HD-Wallpaper.jpg',
        video: 'https://www.youtube.com/watch?v=oVzVdvGIC7U',
        videoID: 'oVzVdvGIC7U'
    },
    {
        id: uuidv4(),
        title: 'The Boys',
        genero: ['Acción', 'Superhéroes', 'Satírico'],
        añoLanzamiento: '2019',
        numeroEpisodios: '24',
        description: 'Un grupo de vigilantes lucha contra superhéroes corruptos que abusan de sus poderes en una sociedad controlada por corporaciones.',
        thumbnail: 'https://wallpapercat.com/w/full/6/5/c/134194-2560x1920-desktop-hd-the-boys-wallpaper-photo.jpg',
        video: 'https://www.youtube.com/watch?v=06rueu_fh30',
        videoID: '06rueu_fh30'
    },
    {
        id: uuidv4(),
        title: 'Rick and Morty',
        genero: ['Animación', 'Ciencia ficción', 'Comedia'],
        añoLanzamiento: '2013',
        numeroEpisodios: '61',
        description: 'Un científico loco y su nieto viajan por universos paralelos, enfrentando situaciones absurdas y filosóficas.',
        thumbnail: 'https://images.wallpapersden.com/image/download/4k-rick-and-morty-2022_bWdnZ2aUmZqaraWkpJRobWllrWdma2U.jpg',
        video: 'https://www.youtube.com/watch?v=Hl1U0bxTHbY',
        videoID: 'Hl1U0bxTHbY'
    },
    {
        id: uuidv4(),
        title: 'Interstellar',
        genero: ['Ciencia ficción', 'Drama', 'Aventura espacial'],
        añoLanzamiento: '2014',
        numeroEpisodios: 'Película',
        description: 'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad mientras enfrentan dilemas temporales y emocionales.',
        thumbnail: 'https://wallpapercave.com/wp/wp1817972.jpg',
        video: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
        videoID: 'zSWdZVtXT7E'
    },
    {
        id: uuidv4(),
        title: 'Inception',
        genero: ['Ciencia ficción', 'Thriller', 'Psicológico'],
        añoLanzamiento: '2010',
        numeroEpisodios: 'Película',
        description: 'Un ladrón especializado en robar secretos del subconsciente debe implantar una idea en la mente de un objetivo, enfrentando capas de sueños cada vez más peligrosas.',
        thumbnail: 'https://wallpapercave.com/wp/1rj6nGA.jpg',
        video: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
        videoID: 'YoHD9XEInc0'
    },
    {
        id: uuidv4(),
        title: 'Dune',
        genero: ['Ciencia ficción', 'Fantasía', 'Política'],
        añoLanzamiento: '2021',
        numeroEpisodios: 'Película',
        description: 'Paul Atreides debe enfrentarse a su destino en el planeta desértico Arrakis, donde se libra una guerra por el control de la especia más valiosa del universo.',
        thumbnail: 'https://www.videogameschronicle.com/files/2022/08/dune-awakening.jpg',
        video: 'https://www.youtube.com/watch?v=n9xhJrPXop4',
        videoID: 'n9xhJrPXop4'
    },
    {
        id: uuidv4(),
        title: 'Avatar: La leyenda de Aang',
        genero: ['Animación', 'Fantasía', 'Aventura'],
        añoLanzamiento: '2005',
        numeroEpisodios: '61',
        description: 'Aang, el último maestro del aire y Avatar, debe dominar los cuatro elementos para detener la guerra y restaurar el equilibrio en el mundo.',
        thumbnail: 'https://www.wallpaperflare.com/static/806/383/633/aang-avatar-the-last-airbender-the-legend-of-korra-avatar-kyoshi-wallpaper.jpg',
        video: 'https://www.youtube.com/watch?v=Rzv1ZamT2yk',
        videoID: 'Rzv1ZamT2yk'
    },
    {
        id: uuidv4(),
        title: 'Attack on Titan',
        genero: ['Animación', 'Acción', 'Drama', 'Distopía'],
        añoLanzamiento: '2013',
        numeroEpisodios: '87',
        description: 'La humanidad vive encerrada tras muros gigantes para protegerse de titanes devoradores de humanos, mientras un grupo de soldados descubre verdades ocultas.',
        thumbnail: 'https://wallpapercave.com/wp/wp4769472.jpg',
        video: 'https://www.youtube.com/watch?v=MGRm4IzK1SQ',
        videoID: 'MGRm4IzK1SQ'
    }
];

const uri = '';
const client = new MongoClient(uri);

async function insertarSeries() {
    try {
        await client.connect();
        const db = client.db('Netflix');
        const collection = db.collection('series');

        const resultado = await collection.insertMany(series);
        console.log(`✅ Se insertaron ${resultado.insertedCount} series`);
    } catch (error) {
        console.error('❌ Error al insertar:', error);
    } finally {
        await client.close();
    }
}

insertarSeries();
