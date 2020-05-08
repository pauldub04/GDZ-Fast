export const state = () => ({
    subjects: [
        //'Английский язык',
        'Русский язык',
        'Алгебра',
        'Геометрия',
        'Физика',
        //'Химия',
        //'Биология',
        //'История',
        //'Обществознание',
    ],
    links: [
        'https://gdz.ru/class-9/russkii_yazik/trostnecova-9/',
        'https://gdz.ru/class-9/algebra/makarichev-14/',
        'https://gdz.ru/class-7/geometria/atanasyan-7-9/',
        'https://gdz.ru/class-7/fizika/sbornik-zadach-lukashik/',
    ],
    imgs: [
        '/img/rus.jpg',
        '/img/algebra.jpg',
        '/img/geom.jpg',
        '/img/phis.jpg',
    ],
})

export const mutations = {

}

export const actions = {
    
}

export const getters = {
    getSubjects: function (state) { return state.subjects },
    getLinks: function (state) { return state.links },
    getImages: function (state) { return state.imgs },
}