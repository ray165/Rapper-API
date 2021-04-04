// client side code 


document.querySelector('button').addEventListener('click', getRapName)

async function getRapName(){
    const rapName = document.querySelector('input').value
    try {
        const res = await fetch(`http://localhost:8000/api/rappers/${rapName}`)
        console.log(res)
        const data = await res.json();
        
        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    } catch (err) {
        console.log(err)
    }
    
}