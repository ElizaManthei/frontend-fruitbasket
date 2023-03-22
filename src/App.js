import {useState} from "react";
import './App.css';
import Producten from "../../frontend-react-handbagsH/z fruit/components/Producten";
import logo from './assets/screenshot-logo.png';
import Input from "../../frontend-react-handbagsH/z fruit/components/Input";
function App () {
    const [numberOfStrawberries, setNumberOfStrawberries] = useState(0);
    const [numberOfBananas, setNumberOfBananas] = useState(0);
    const [numberOfApples, setNumberOfApples] = useState(0);
    const [numberOfKiwis, setNumberOfKiwis] = useState(0);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState(0);
    const [post, setPost] = useState("");
    const [comments, setComments] = useState("")
    const [agree, setAgree] = useState(false)
    const [deliveryFrequency, setDeliveryFrequency] = useState("everyweek");
    const [deliveryTime, setDeliveryTime] = useState("daytime");

    function reset (){
        setNumberOfStrawberries(0);
        setNumberOfBananas(0);
        setNumberOfApples(0);
        setNumberOfKiwis(0);
    }
    function resetAll (){
    reset();
    setFirstname("");
    setLastname("");
    setAge(0);
    setPost("");
    setComments("");
    setAgree(false);
    setDeliveryFrequency("everyweek");
    setDeliveryTime("daytime");
    }
    function handleSubmit (e) {
        e.preventDefault();
        console.log(`
        Aardbeien: ${numberOfStrawberries},
        bananen: ${numberOfBananas},
        appels: ${numberOfApples},
        kiwi's: ${numberOfKiwis},
        Voornaam: ${firstname}, 
        Achternaam: ${lastname}, 
        Leeftijd: ${age}, 
        Postcode: ${post}, 
        Bezorgfrequentie: ${deliveryFrequency},
        Bezorgtijd: ${deliveryTime},
        Opmerkingen: ${comments},
        Algemene voorwaarden: ${agree}
        `);
    }

    return (
    <>
      <h1><img src = {logo} alt = "Fruitmand Bezorgservice"/></h1>
      <main>
          <Producten
              productName = "Aardbeien"
              stateValue = {numberOfStrawberries}
              icon = "🍓"
              stateSetter = {setNumberOfStrawberries}>
          </Producten>
          <Producten
              productName = "Bananen"
              stateValue = {numberOfBananas}
              icon = "🍌"
              stateSetter = {setNumberOfBananas}>
          </Producten>
          <Producten
              productName = "Appels"
              stateValue = {numberOfApples}
              icon = "🍏"
              stateSetter = {setNumberOfApples}>
          </Producten>
          <Producten
              productName = "Kiwi's"
              stateValue = {numberOfKiwis}
              icon = "🥝"
              stateSetter = {setNumberOfKiwis}>
          </Producten>
          <button type = "button" className = "reset-submit" onClick = {() => reset()}>Reset</button>
        <form onSubmit = {handleSubmit}>
            <Input
                idAttribute = "name-field"
                nameAttribute = "firstname"
                inputType = "text"
                stateValue = {firstname}
                stateSetter = {setFirstname}
                labelText = "Voornaam"
            />
            <Input
                idAttribute = "lastname-field"
                nameAttribute = "lastname"
                inputType = "text"
                stateValue = {lastname}
                stateSetter = {setLastname}
                labelText = "Achternaam"
            />
            <Input
                idAttribute = "age-field"
                nameAttribute = "age"
                inputType = "number"
                stateValue = {age}
                stateSetter = {setAge}
                labelText = "Leeftijd"
            />
            <Input
                idAttribute = "post-field"
                nameAttribute = "post"
                inputType = "text"
                stateValue = {post}
                stateSetter = {setPost}
                labelText = "Postcode"
            />
            <p>Bezorgfrequentie</p>
            <select
            name = "delivery"
            id = "delivery-field"
            value = {deliveryFrequency}
            onChange = {(e) => setDeliveryFrequency(e.target.value)}>
                <option value = "week">iedere week</option>
                <option value = "every-other-week">om de week</option>
                <option value = "month">iedere maand</option>
            </select>
           <div>
               <input
                   type = "radio"
                   id = "choice-day"
                   name = "delivery-time"
                   value = "daytime"
                   checked = {deliveryTime === "daytime"}
                   onChange = {(e) => setDeliveryTime(e.target.value)}/>
               <label htmlFor = "choice-day">Overdag</label>

               <input
                   type = "radio"
                   id = "choice-evening"
                   name = "delivery-time"
                   value = "in-the-evening"
                   checked = {deliveryTime === "in-the-evening" }
                   onChange = {(e) => setDeliveryTime(e.target.value)}
               />
               <label htmlFor = "choice-evening">'s Avonds</label>
           </div>

            <label htmlFor = "comments-field">Opmerkingen</label>
            <textarea
                name = "comments"
                id = "comments-field"
                value = {comments}
                onChange = {(e) => setComments(e.target.value)}
                rows={10}
                cols={50}
            />
                <input
                    type = "checkbox"
                    name = "agree"
                    id = "agree-field"
                    value = {agree}
                    onChange = {(e) => setAgree(e.target.checked)}
                />
                <label htmlFor = "agree-field">Ik ga akkoord met de voorwaarden</label>

            <button type = "submit" className = "reset-submit" onClick = {() => resetAll()}>Verzend</button>
                    </form>
                }
      </main>
    </>
  );
}

export default App;
