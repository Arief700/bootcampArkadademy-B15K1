function substituteVowels(vokal, huruf){
    let regVokal = /[aiueo]/gi;
    if(regVokal.test(vokal)){
        let ketVocal = vokal.replace(regVokal,huruf);
        console.log('Input = '+vokal);
        console.log('Output = '+ketVocal);
    } else{
        console.log('Input = '+vokal);
        console.log('Output = Tidak ada huruf vokal!');
    }
}

substituteVowels('Orang jahat adalah orang baik yang tersakiti','i'); // iring jihit idilih iring biik ying tirsikiti
substituteVowels('try fry cry','x'); // Tidak ada huruf vokal!