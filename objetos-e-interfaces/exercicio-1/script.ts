interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

interface Window {
  UserData: any;
}

window.UserData = {};

function isUserData(obj: unknown): obj is UserData {
  if(obj && typeof obj === "object" && ("nome" in obj || "email" in obj || "cpf" in obj)){
    return true
  }
  return false
}

function validJson(str: string): boolean{
  try{
    JSON.parse(str)
  } catch (e){
    return false
  }
  return true
}

function loadLocalStorage(){
  const localUserData = localStorage.getItem('UserData')

  if(localUserData && validJson(localUserData)){
    const userData = JSON.parse(localUserData)

    if(isUserData(userData)){

      Object.entries(userData).forEach(([key, value]) => {
        const input = document.getElementById(key);
        if(input instanceof HTMLInputElement){
          input.value = value
          window.UserData[key] = value
        }
      })

    }
  }
}

loadLocalStorage()

function handleInput({target}: KeyboardEvent) {
  if(target instanceof HTMLInputElement){
    window.UserData[target.id] = target.value
    localStorage.setItem("UserData", JSON.stringify(window.UserData))
  }
}

const form = document.querySelector<HTMLFormElement>("#form");

form?.addEventListener('keyup', handleInput)