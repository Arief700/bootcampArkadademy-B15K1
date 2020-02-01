function Biodata(nama, umur){
    let dataku = {
        name: nama,
        age: umur,
        address: 'Jl. Baru bakti desa Moro, Kec. Sekaran, Kab. Lamongan, Jawa timur',
        hobbies: ['Membaca, Coding, Bermain Game'],
        is_married: false,
        list_school:[
            {
                name: 'SMA Negeri 1 Sekaran',
                year_in: 2016,
                year_out: 2019,
                major: 'Ipa'
            },
            {
                name: 'SMP Negeri 1 Maduran',
                year_in: 2013,
                year_out: 2016,
                major: null
            },
            {
                name: 'SD Negeri 1 Moro',
                year_in: 2007,
                year_out: 2013,
                major: null
            }
        ],
        skills: [
            {
                skill_name: 'HTML & CSS',
                level: 'Advanced'
            },
            {
                skill_name: 'Javascript',
                level: 'Beginner'
            },
        ],
        interest_in_coding: true
    }
    return JSON.stringify(dataku);
}

Biodata('Arief Setiawan', 19);