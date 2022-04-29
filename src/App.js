import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import axios from 'axios'


const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')


function App() {


  const [la,setLa] = useState("");
  const [log,setLog] = useState("");
  const [s,setStream] = useState("");
  const [d,setD] = useState("");
  const [ti,setT] = useState("");
  const [i,setI] = useState("");

  const add = "0xdB707d1190Df30f2038B7e76c8f50f4DcfeDBedF";
  const abi = [{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"FreeAccess","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"advantagesOfNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"validationOfCustomer","outputs":[{"internalType":"string","name":"_uri","type":"string"}],"stateMutability":"view","type":"function"}]

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    setLa(position.coords.latitude);
    setLog(position.coords.longitude);
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
  }

  async function createImg(e) {
    const file = e;
    try {
        const added = await client.add(
            file, {
            progress: (prog) => console.log(`received: ${prog}`)
        });
        const url = `https://ipfs.infura.io/ipfs/${added.path}`;
       
        console.log(url);
        createMarket(url);
    } catch (error) {
        console.log('Error uploading file:', error);
    }
}

async function createMarket(url) {
    
   
    // upload to IPFS
    const data = JSON.stringify({
       image: url
    });
    try {
        const added = await client.add(data)
        const url = `https://ipfs.infura.io/ipfs/${added.path}`
        // run a function that creates sale and passes in the url 
        createNfts(url)
    } catch (error) {
        console.log('Error uploading file:', error);
    }
}

async function payFee(){
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();

  // we want to create the token
  let contract = new ethers.Contract(add, abi, signer);
  let transaction = await contract.advantagesOfNFT(ti,{
    value: 1000
});
  let tx = await transaction.wait();
  console.log(tx); 
}

async function Validite(){
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();

  // we want to create the token
  let contract = new ethers.Contract(add, abi, signer);
  let tx = await contract.validationOfCustomer(ti);
  
  console.log(tx);
  const meta = await axios.get(tx)
  const beta = await axios.get(meta.data.image)

 console.log(beta.data)
 setI(beta.data)
}

async function createNfts(url) {
  // create the items and list them on the marketplace
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();

  // we want to create the token
  let contract = new ethers.Contract(add, abi, signer);
  let transaction = await contract.safeMint(url);
  let tx = await transaction.wait();
  let event = tx.events[0];
  let value = event.args[2];
  let tokenId = value.toNumber();
  console.log(tokenId,url);
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Airport NFTs System</h1>
          <button className='btn' onClick={async ()=>{
            getLocation()
            } }>Get Location</button>
            {la >= 22 && la < 24 ? log >= 72 && log < 73 ? <button className='btn' onClick={async ()=>{
              await createImg(d);
            }}>Create</button> : "" : ""}
            
            <button className="start-camera" onClick={async ()=>{
              	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                setStream(stream);
                let v = document.getElementsByClassName('video')[0]
                if(v){
                  v.srcObject = stream;
                }
            }}>Start Camera</button>
            <video className="video" width="320" height="240" autoPlay></video>
            <button className="click-photo" onClick={()=>{
              let c = document.getElementsByClassName('canvas')[0]
              let v = document.getElementsByClassName('video')[0]
              c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
   	          let image_data_url = c.toDataURL('image/jpeg');

            	// data url of the image
              setD(image_data_url);
            	console.log(image_data_url);
            }}>Click Photo</button>
            <canvas className="canvas" width="320" height="240"></canvas>

            <br></br>
            <br></br>
            <h1>Advantages of NFTs</h1>
            <input type="text" placeholder='Token Ids' onChange={(e)=>{
              setT(e.target.value);
            }}></input>
            <button className='btn' onClick={async () => {
              await payFee();
            }}>PayFees</button>

            <h1>Validate The Owner</h1>
            <input type="text" placeholder='Token Ids' onChange={(e)=>{
              setT(e.target.value)}}></input>
              <button className='btn' onClick={async () =>{
                await Validite()
              }}>Validate</button>
              <img src={i} alt="Nft_img"></img>
      </header>
    </div>
  );
}

export default App;
