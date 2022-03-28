let ozellikler = [
  'Lider, yaratıcı, eleştirilere tahammülsüz, çabuk parlayıp çabuk sönen birisiniz. İletişim alanında başarılısınız. Adalet duygularınız gelişmiştir.',
  'Genel olarak çok verici, kendilerinden çok karşıdakini düşünen ailelerine düşkün, temkinli ve sezgisel bir insansınız. Mükemmel ebeveynsinizdir.',
  'Organize, tutkulu, istediklerini elde etmek için düşmanca davranmaktan çekinmeyen kişisiniz.',
  'Esrarengiz, hedefleri olan, tanımlanması güçsünüz. Kendinize özgü tarzınız var.',
  'Zarif ve dışa dönüksünüz. Zihinsel ve fiziksel olarak sürekli hareket halinde ve mizahi, yenilikçi bir kişisiniz.',
  'Sevecen ve romantiksiniz. Tam bir salon insanısınızdır.',
  'Duygusal, yaratıcı, mahremiyetlerine düşkünsünüz. Elde edilmesi zorsunuz ve İlişkiye girdiğiniz insana gerçek bir bağlılık gösterirsiniz.',
  'Sabırlı, başarılı, azimlisiniz. Şefkat ihtiyacı hissedersiniz. Zarif yüz hatlarınız olduğu için ilerleyen yaşlarında da genç görünürsünüz',
  'Saf, masum, kolay güvenenirsiniz. Ne var ki sezgi güçleri sayesinde sanılanın aksine kolay kandırılamassınız. Kendinize olan güvene rağmen yine de yaptıklarını onaylatan birisisiniz.',
]

function getDay() {
  let day = document.getElementById('day').value
 //  console.log(day)
  return day
}

function getMonth() {
  let month = document.getElementById('month').value
  //   console.log(month)
  return month
}

function getYear() {
  let year = document.getElementById('year').value
  //   console.log(year)
  return year
}

function getBirthday() {
  let day = getDay()
  let month = getMonth()
  let year = getYear()

  console.log(day + '.' + month + '.' + year)

  return day + '.' + month + '.' + year
}

function convertToOneDigit(a, b) {
  //bazı sayılar 10 dan yüksek cıkarsa tek haneye cevirmek ıcın rakamlarını toplama islemi
  let sum = a + b

  if (sum >= 10) {
    let newNumber = String(sum) // sum u stringe çevirip, newNumbera atadık
    sum = Number(newNumber.charAt(0)) + Number(newNumber.charAt(1)) //new numberın karakterlerini topladık (17 => 1+7 = 8)
  }

  return sum
}

function printOneTime(array) {
  //her bir özelliği bir kere basma (3-3-1-7-1-6-4-1) => 3. özelliği bir kere bassın
  
  document.getElementById('area').innerHTML=''

  for (let i = 0; i < array.length; i++) {
    let isRepeated = false
    for (let j = 0; j < i; j++) {
      if (array[i] === array[j]) {
        //a b c d c
        isRepeated = true
      }
    }

    if (!isRepeated) {
      document.getElementById('area').innerHTML += array[i]
    }
  }
}

function calculate() {
  let pinCode = []
  let karakter = []

  for (let i = 1; i <= 8; i++) {
    let toplam = 0

    switch (i) {
      case 1: {
        //dogum günleri toplamı ('30' .01.2001)
        toplam =
          Number(getBirthday().charAt(0)) + Number(getBirthday().charAt(1))
        if (toplam >= 10) {
          toplam = convertToOneDigit(
            Number(getBirthday().charAt(0)),
            Number(getBirthday().charAt(1)),
          )
        }
        pinCode.push(toplam)
        break
      }
      case 2: {
        //dogulan ayın rakamlarının toplamı (30. '01' .2001)

        if (Number(getBirthday().charAt(3)) == 0) {
          toplam = Number(getBirthday().charAt(4))
        } else {
          //10. 11. 12. aylar için
          toplam = convertToOneDigit(Number(getBirthday().charAt(3)),Number(getBirthday().charAt(4)),)
        }

        pinCode.push(toplam)
        break
      }
      case 3: {
        //dogulan yılın rakamlarının toplamı (2+0+0+1)
        toplam =
          Number(getBirthday().charAt(6)) +
          Number(getBirthday().charAt(7)) +
          Number(getBirthday().charAt(8)) +
          Number(getBirthday().charAt(9))
        if (toplam >= 10) {
          toplam = convertToOneDigit(
            convertToOneDigit(
              Number(getBirthday().charAt(6)),
              Number(getBirthday().charAt(7)),
            ),                                  //toplam = convert(convert(a,b) , convert(c,d))
            convertToOneDigit(
              Number(getBirthday().charAt(8)),
              Number(getBirthday().charAt(9)),
            ),
          )
        } 

        pinCode.push(toplam)
        break
      }

      case 4: {
        // case1 + case2 + case3 toplamı
        toplam = pinCode[0] + pinCode[1] + pinCode[2]
        if (toplam >= 10) {
          toplam = convertToOneDigit(convertToOneDigit(pinCode[0], pinCode[1]),pinCode[2])
        }
        pinCode.push(toplam)
        break
      }

      case 5: {
        //case1 + case4 toplamı
        toplam = pinCode[0] + pinCode[3]
        if (toplam >= 10) {
          toplam = convertToOneDigit(pinCode[0], pinCode[3])
        }

        pinCode.push(toplam)
        break
      }

      case 6: {
        //case1 + case2 toplamı
        toplam = pinCode[0] + pinCode[1]
        if (toplam >= 10) {
          toplam = convertToOneDigit(pinCode[0], pinCode[1])
        }

        pinCode.push(toplam)
        break
      }

      case 7: {
        //case2 + case3 toplamı
        toplam = pinCode[1] + pinCode[2]
        if (toplam >= 10) {
          toplam = convertToOneDigit(pinCode[1], pinCode[2])
        }

        pinCode.push(toplam)
        break
      }
      case 8: {
        //case6 + case7 toplamı
        toplam = pinCode[5] + pinCode[6]
        if (toplam >= 10) {
          toplam = convertToOneDigit(pinCode[5], pinCode[6])
        }

        pinCode.push(toplam)
        break
      }
      default:
        break
    }

    switch (toplam) {
      case 1: {
        karakter.push(ozellikler[0])
        break
      }
      case 2: {
        karakter.push(ozellikler[1])
        break
      }
      case 3: {
        karakter.push(ozellikler[2])
        break
      }
      case 4: {
        karakter.push(ozellikler[3])
        break
      }
      case 5: {
        karakter.push(ozellikler[4])
        break
      }
      case 6: {
        karakter.push(ozellikler[5])
        break
      }
      case 7: {
        karakter.push(ozellikler[6])
        break
      }
      case 8: {
        karakter.push(ozellikler[7])
        break
      }
      case 9: {
        karakter.push(ozellikler[8])
        break
      }

      default:
        break
    }
  }
  let pinin =
    pinCode[0] + '-' +pinCode[1] + '-' +pinCode[2] + '-' +pinCode[3] + '-' + pinCode[4] + '-' + pinCode[5] + '-' + pinCode[6] +  '-' +  pinCode[7]

  return [pinin, karakter]
}

function check() {
  //check for inputs
  let bday = getBirthday().split('.') //30.01.2001
  //[30 , 01 , 2001]
  let checked = true
  //console.log(bday)

  if ( Number(bday[0] > 30) || Number(bday[0] <= 0) || bday[0].length != 2 || /^([a-zA-Z]{0,})$/.test(bday[0])) {
    document.getElementById('dayError').innerHTML = 'Gün 2 rakamdan oluşmalıdır (01-30)'
    checked = false
  }
   if ( Number(bday[1] > 12) || Number(bday[1] <= 0) || bday[1].length != 2 || /^([a-zA-Z]{0,})$/.test(bday[1])) {
    document.getElementById('monthError').innerHTML = 'Ay 2 rakamdan oluşmalıdır (01-12)'
    checked = false
  }
   if (bday[2].length !== 4 || /^([a-zA-Z]{0,})$/.test(bday[2])) {
    document.getElementById('yearError').innerHTML ='Yıl 4 rakamdan oluşmalıdır'
    checked = false
  }

  if (checked) {
    document.getElementById('dayError').innerHTML = ''
    document.getElementById('monthError').innerHTML = ''
    document.getElementById('yearError').innerHTML = ''
    //CSS
    document.getElementById('number').style.color='yellow'
    document.getElementById('info').style.left='50%'

  }
  if (!checked) {
    document.getElementById('number').innerHTML = 'Hatalarınızı Düzeltin'
    document.getElementById('area').innerHTML = ''
    //CSS
    document.getElementById('number').style.color='red'
   

  }

  return checked
}

function printResults() {
  if (check()) {
    let [code, character] = calculate()

    document.getElementById('number').innerHTML = code //pinkodu
    printOneTime(character) //pin koduna gore karakteristik ozellikler
  }
}
