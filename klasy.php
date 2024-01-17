<?php

class osoba{
    public $nazwisko, $imie, $id; //ten sam zasieg (public)

    function wypiszNazwisko($arg){  //metoda
        $this -> nazwisko = $arg; //$this - oznacza bierzący obiekt (dla ktorego wywolujwmy metode) dzieki temu jest uniwersalna
    }

    function wypiszImie($arg2){
        $this -> imie = $arg2;
    }

    function wypiszId($arg3){
        $this -> id = $arg3;
    }

    function pobierzNazwisko(){
        return $this -> nazwisko; 
    }

    function pobierzImie(){
        return $this -> imie;
    }

    function pobierzId(){
        return $this -> id;
    }

    function __construct() { //konstruktor
        $this -> nazwisko = 'Gabriela';
        $this -> imie = 'Solak';
        $this -> id = 28;
    }
}

//tworzenie obiektow
$postac1 = new osoba();
$postac2 = new osoba();

//przypisaine wartosci bezposrednio
$postac1 -> nazwisko = "Nowak";
$postac1 -> imie = 'Jan';
$postac1 -> id = '1';

//przypisanie za pomoca metod
$postac2 -> wypiszNazwisko('Tżćók');
$postac2 -> wypiszImie('Ola');
$postac2 -> wypiszId(2);

//odczytanie wartosci za pomoca metod
echo 'Obiekt postac1 ma nastepujace wartosci cech: '.
$postac1 -> pobierzNazwisko().' '.$postac1 -> pobierzImie()." ".$postac1 -> pobierzId()."<br>";

//odczytanie wartosci bez metod (za pomoca instrukcji)
echo 'Obiekt postac2 ma nastepujace wartosci cech: '.
$postac2 -> nazwisko.' '.$postac2 -> imie." ".$postac2 -> id."<br>";

//KONSTRUKTOR I DESTRUKTOR
//konstruktor - gdy obiekt jest tworzony
//destruktor - wywolywana gdy obiekt jest usuwany

$postac3 = new osoba();
echo "Obiekt postac3 ma nastepujace wartosci: ".$postac3 -> pobierzNazwisko()." ".$postac3 -> pobierzImie()." ".$postac3 -> pobierzId()."<br>";

//KLASY POTOMNE
class klient extends osoba{
    public $adres;

    public function wpiszAdres($arg4){
        $this -> adres = $arg4;
    }

    public function pobierzAdres()
    {
        return $this -> adres;
    }
}

$klient1 = new klient();
$klient1 -> wypiszNazwisko("Lis");
$klient1 -> wypiszImie("Ewa");
$klient1 -> wypiszId(5);
$klient1 -> wpiszAdres('ul. szujskiego 13 Tarnow');

//urzycie metod
echo "Obiekt klient1 ma nastepujace wartosci: ".$klient1 -> pobierzNazwisko().
" ".$klient1 -> pobierzImie()." ".$klient1 -> pobierzAdres();

//bez metod
//echo "Obiekt klient1 ma nastepujace wartosci: ".$klient -> nazwisko." ".$klient -> imie." ".
//$klient -> adres;

class odbiorca extends klient{
    public $id_odbioru, $nazwa_firmy;

    function __construct(){
        $this -> adres -> 'szujski';
        $this -> nazwa_firmy = 'super firma';
    }
}

$firma1 = new 




?>