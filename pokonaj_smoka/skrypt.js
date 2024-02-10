il_drewna = 4;
il_sieci = 0;
il_miesa = 1;
ruszt = false;

katapulty = 0;
luki = 0;
lucznicy = 0;
rzolnierze = 0;
sila_armi = 1;

gracz_jedzenie = 80;
gracz_zycie = 80;
gracz_sila = 10;

nazwa_gracza = prompt("Podaj nazwe gracza:");
document.getElementById("nazwa_gracza").innerHTML += nazwa_gracza;

function zw_drewno()
{
    il_drewna += 1;
    document.getElementById("drewno").innerHTML = il_drewna;
    if(il_drewna % 10 == 0)
    {
        gracz_sila += 3;
        document.getElementById("g_sila").innerHTML = gracz_sila + "%";
        gracz_zycie -= 1;
        document.getElementById("g_zycie").innerHTML = gracz_zycie + "%";
    }
}
function zw_siec()
{
    il_sieci += 1;
    document.getElementById("siec").innerHTML = il_sieci;
}
function zw_mieso()
{
    il_miesa += 1;
    document.getElementById("mieso").innerHTML = il_miesa;
}
function zw_jedzenie_g()
{
    if(il_miesa > 4)
    {
        if(ruszt == false)
        {
            alert("Nie masz rusztu, mieso jest surowe więc tracisz na zdrowi i lekko cię to osłabia. (kup ognisko w dodatkach)");
            gracz_jedzenie += 3;
            gracz_sila -= 1;
            gracz_zycie -= 2;
            document.getElementById("g_jedzenie").innerHTML = gracz_jedzenie + "%";
            document.getElementById("g_zycie").innerHTML = gracz_zycie + "%";
            document.getElementById("g_sila").innerHTML = gracz_sila + "%";
        }
        else
        {
            gracz_jedzenie += 5;
            gracz_sila += 1;
            document.getElementById("g_jedzenie").innerHTML = gracz_jedzenie + "%";
            document.getElementById("g_sila").innerHTML = gracz_sila + "%";
            ruszt = false;
            document.getElementById('posiadanie_rusztu').innerHTML = 'brak'; 
        }
        il_miesa -= 3;
        document.getElementById('mieso').innerHTML = il_miesa;
    }
    else
    {
        alert("Masz za mało mięsa!!")
    }
}

function zw_katapulty()
{
    if(il_drewna>=20)
    {
        il_drewna -= 20;
        sila_armi += 2;
        katapulty += 1;
        document.getElementById('il_katapulty').innerHTML = katapulty;
        document.getElementById('laczna_sila_armi').innerHTML = sila_armi + "%";
        document.getElementById('drewno').innerHTML = il_drewna;
    }
    else
    {
        alert("Masz za mało drewna by zbudować katapulte (wymagane 20)")
    }
}
function zw_luki()
{
    if(il_drewna>=2 && il_sieci>=2)
    {
        il_drewna -= 2;
        il_sieci -= 2;
        luki += 1;
        document.getElementById('drewno').innerHTML = il_drewna;
        document.getElementById('siec').innerHTML = il_sieci;
        document.getElementById('il_luki').innerHTML = luki;
    }
    else
    {
        alert("Masz za mało drewna i pajęczych sieci by zbudować łuk (wymagane 2)")
    }
}
function zw_lucznicy()
{
    if(il_miesa>=10 && luki>=5)
    {
        il_miesa -= 10;
        luki -= 5;
        sila_armi += 5;
        lucznicy += 5;
        document.getElementById('mieso').innerHTML = il_miesa;
        document.getElementById('il_luki').innerHTML = luki;
        document.getElementById('laczna_sila_armi').innerHTML = sila_armi + '%';
        document.getElementById('il_lucznicy').innerHTML = lucznicy;
    }
    else if(il_miesa<10)
    {
        alert("Masz za mało mięsa na utrzymanie armi łuczników (wymagane 10)");
    }
    else if(luki<5)
    {
        alert("Masz za mało łuków by wytrenować nowych łuczników (wymagane 5)");
    }
}
function zw_rzolnierze()
{
    if(il_miesa>=10 && katapulty>=1)
    {
        katapulty -= 1;
        il_miesa -= 10;
        sila_armi += 5;
        rzolnierze += 5;
        document.getElementById('mieso').innerHTML = il_miesa;                
        document.getElementById('il_katapulty').innerHTML = katapulty;                 
        document.getElementById('laczna_sila_armi').innerHTML = sila_armi + '%';                 
        document.getElementById('il_rzolnierze').innerHTML = rzolnierze;    
    }
    else if(il_miesa<10)
    {
        alert("Masz za mało mięsa na utrzymanie armi rzołnierzy (wymagane 10)");
    }     
    else if(katapulty<1)
    {
        alert("Masz na mało katapult by wytrenować nowych rzołnierzy (wymagana 1)");
    }    
}
function kup_ruszt()
{
    if(il_drewna>=5 && ruszt == false)
    {
        ruszt = true;
        document.getElementById('posiadanie_rusztu').innerHTML = 'posiadany'; 
        il_drewna -= 5;
        document.getElementById('drewno').innerHTML = il_drewna;
    }
    else if(il_drewna<5)
    {
        alert("Masz za mało drewna na ognisko (wyagane 5)")
    }
    else if(ruszt == true)
    {
        alert("Masz już ruszt!")
    }
}

function smok(nazwa, sila, zdj, opis)
{
    this.nazwa_smoka = nazwa;
    this.sila_smoka = sila;
    this.zdj_smoka = zdj;
    this.opis_smoka = opis;

    this.zmiana_smokow = function()
    {
        document.getElementById('s_zdj').src = this.zdj_smoka;
        document.getElementById('s_opis').innerHTML = this.opis_smoka;
        document.getElementById('s_nazwa').innerHTML = 'Smok: ' + this.nazwa_smoka;
    }
}

var sila_smoka = 70;
function wybierz_smoka(imie_smoka)
{
    if(imie_smoka == 'Amaru')
    {
        var smok1 = new smok('Amaru', 70, "smok1.gif", 'Amaru to przedwieczny smok, jego historia sięga czasów nie znanym żadnym istotą. Czy jesteś gotowy na walkę?')
        sila_smoka = smok1.sila_smoka;
        smok1.zmiana_smokow();
    }
    if(imie_smoka == 'Bolla')
    {
        var smok2 = new smok('Bolla', 50, "smok2.gif", 'Bella to młody smok, jedan niech cię to nie zwiedzie, jest szybka i przebiegła. Czy jesteś gotowy na walkę?')
        sila_smoka = smok2.sila_smoka;
        smok2.zmiana_smokow()
    }
}
var a = false;
function Atak()
{
    document.getElementById('tekst_walka').innerHTML = 'Naciskając na pola ustaw swoje wojsko. Bądz rozsądny, nie będzie powrotu!'
    pole = document.getElementById('demo');
    for(var i=0; i<21; i++)
    {
        if(i%7==0 && i!=0)
        {
            document.getElementById('demo').innerHTML += '<br>';
        }
        if(i==3)
        {
            _pole = document.createElement('button');
            pole.appendChild(_pole);
            _pole.setAttribute('id', 'bitwa_smok')
        }
        else
        {
            _pole = document.createElement('button');
            pole.appendChild(_pole);
            _pole.setAttribute('class', 'pola_bitwy')

            _pole.setAttribute('onclick', 'zmiana_kolorow(this)');
        }
    }
    pola_do_obstawienia = sila_armi + gracz_sila - sila_smoka;
    if(pola_do_obstawienia < 2)
    {
        pola_do_obstawienia = 1;
    }
    document.getElementById('pola_do_obstawienia').innerHTML = "Liczba pol walki: " + pola_do_obstawienia;
    a = true
}
pola_klikniete = 0;
function zmiana_kolorow(button)
{
    while(pola_klikniete <= pola_do_obstawienia)
    {
        button.style.backgroundColor = '#2f2f2f';
        pola_klikniete +=1;
    }
}
function ostateczna_walka()
{
    if(a == true)
    {
    wszystkie_pola = 25;
    wolne_pola = wszystkie_pola - pola_do_obstawienia;
    x = Math.floor(Math.random() * 25) + 1
    if(x < wolne_pola)
    {
        window.open('przegrana.html')
    }
    else
    {
        window.open('wygrana.html')
    }
    }
}

function nowa_gra()
{
    window.open('pokonaj_smoka.html');
}