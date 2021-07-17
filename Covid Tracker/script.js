        /* 
            API : https://covid19.mathdro.id/api/countries/philippines
            API : https://covid19.mathdro.id/api/countries/indonesia
            API : https://covid19.mathdro.id/api/countries/malaysia
            API : https://covid19.mathdro.id/api/countries/singapore
            API : https://covid19.mathdro.id/api/countries/thailand
            API : https://covid19.mathdro.id/api/countries/brunei
            API : https://covid19.mathdro.id/api/countries/vietnam
            API : https://covid19.mathdro.id/api/countries/laos
            API : https://covid19.mathdro.id/api/countries/cambodia
            API : https://covid19.mathdro.id/api
        */

        // Covid in the World
        const urlWorld = "https://covid19.mathdro.id/api";

        async function getDataWR() {
            const valWR = await fetch(urlWorld);
            const dataWR = await valWR.json();
            const { confirmed, recovered, deaths, lastUpdate} = dataWR;
            const confirmWR = confirmed.value;
            const recoveredWR = recovered.value;
            const deathsWR = deaths.value;

            document.getElementById("CWR").innerHTML = confirmWR;
            document.getElementById("RWR").innerHTML = recoveredWR;
            document.getElementById("DWR").innerHTML = deathsWR;
            document.getElementById("up2date").innerHTML = lastUpdate + " --> Latest Update";
        }

        // Covid in Indonesia
        const urlID = "https://covid19.mathdro.id/api/countries/indonesia";

        async function getDataID() {
            const valID = await fetch(urlID);
            const dataID = await valID.json();
            const { confirmed, recovered, deaths} = dataID;
            const confirmID = confirmed.value;
            const recoveredID = recovered.value;
            const deathsID = deaths.value;

            document.getElementById("CID").innerHTML = confirmID;
            document.getElementById("RID").innerHTML = recoveredID;
            document.getElementById("DID").innerHTML = deathsID;
        }
        
        // Covid in Filipina
        const urlPH = "https://covid19.mathdro.id/api/countries/philippines";

        async function getDataPH() {
            const valPH = await fetch(urlPH);
            const dataPH = await valPH.json();
            const { confirmed, recovered, deaths} = dataPH;
            const confirmPH = confirmed.value;
            const recoveredPH = recovered.value;
            const deathsPH = deaths.value;

            document.getElementById("CPH").innerHTML = confirmPH;
            document.getElementById("RPH").innerHTML = recoveredPH;
            document.getElementById("DPH").innerHTML = deathsPH;
        }


        // Covid in Malaysia
        const urlMLY = "https://covid19.mathdro.id/api/countries/malaysia";

        async function getDataMLY() {
            const valMLY = await fetch(urlMLY);
            const dataMLY = await valMLY.json();
            const { confirmed, recovered, deaths} = dataMLY;
            const confirmMLY = confirmed.value;
            const recoveredMLY = recovered.value;
            const deathsMLY = deaths.value;

            document.getElementById("CMLY").innerHTML = confirmMLY;
            document.getElementById("RMLY").innerHTML = recoveredMLY;
            document.getElementById("DMLY").innerHTML = deathsMLY;  
        }

        // Covid in Singapura
        const urlSG = "https://covid19.mathdro.id/api/countries/singapore";

        async function getDataSG() {
            const valSG = await fetch(urlSG);
            const dataSG = await valSG.json();
            const { confirmed, recovered, deaths} = dataSG;
            const confirmSG = confirmed.value;
            const recoveredSG = recovered.value;
            const deathsSG = deaths.value;

            document.getElementById("CSG").innerHTML = confirmSG;
            document.getElementById("RSG").innerHTML = recoveredSG;
            document.getElementById("DSG").innerHTML = deathsSG;
        }

        // Covid in Thailand
        const urlTH = "https://covid19.mathdro.id/api/countries/thailand";

        async function getDataTH() {
            const valTH = await fetch(urlTH);
            const dataTH = await valTH.json();
            const { confirmed, recovered, deaths} = dataTH;
            const confirmTH = confirmed.value;
            const recoveredTH = recovered.value;
            const deathsTH = deaths.value;

            document.getElementById("CTH").innerHTML = confirmTH;
            document.getElementById("RTH").innerHTML = recoveredTH;
            document.getElementById("DTH").innerHTML = deathsTH;
        }

        // Covid in Brunei
        const urlBR = "https://covid19.mathdro.id/api/countries/brunei";

        async function getDataBR() {
            const valBR = await fetch(urlBR);
            const dataBR = await valBR.json();
            const { confirmed, recovered, deaths} = dataBR;
            const confirmBR = confirmed.value;
            const recoveredBR = recovered.value;
            const deathsBR = deaths.value;

            document.getElementById("CBR").innerHTML = confirmBR;
            document.getElementById("RBR").innerHTML = recoveredBR;
            document.getElementById("DBR").innerHTML = deathsBR;
        }
        // Covid in Vietnam
        const urlVTM = "https://covid19.mathdro.id/api/countries/vietnam";

        async function getDataVTM() {
            const valVTM = await fetch(urlVTM);
            const dataVTM = await valVTM.json();
            const { confirmed, recovered, deaths} = dataVTM;
            const confirmVTM = confirmed.value;
            const recoveredVTM = recovered.value;
            const deathsVTM = deaths.value;

            document.getElementById("CVTM").innerHTML = confirmVTM;
            document.getElementById("RVTM").innerHTML = recoveredVTM;
            document.getElementById("DVTM").innerHTML = deathsVTM;
        }
        // Covid in Laos
        const urlLS = "https://covid19.mathdro.id/api/countries/laos";

        async function getDataLS() {
            const valLS = await fetch(urlLS);
            const dataLS = await valLS.json();
            const { confirmed, recovered, deaths} = dataLS;
            const confirmLS = confirmed.value;
            const recoveredLS = recovered.value;
            const deathsLS = deaths.value;

            document.getElementById("CLS").innerHTML = confirmLS;
            document.getElementById("RLS").innerHTML = recoveredLS;
            document.getElementById("DLS").innerHTML = deathsLS;
        }

        // Covid in Kamboja
        const urlKBJ = "https://covid19.mathdro.id/api/countries/cambodia";

        async function getDataKBJ() {
            const valKBJ = await fetch(urlKBJ);
            const dataKBJ = await valKBJ.json();
            const { confirmed, recovered, deaths} = dataKBJ;
            const confirmKBJ = confirmed.value;
            const recoveredKBJ = recovered.value;
            const deathsKBJ = deaths.value;

            document.getElementById("CKBJ").innerHTML = confirmKBJ;
            document.getElementById("RKBJ").innerHTML = recoveredKBJ;
            document.getElementById("DKBJ").innerHTML = deathsKBJ;
        }

        getDataWR();
        getDataID();
        getDataPH();
        getDataMLY();
        getDataSG();
        getDataTH();
        getDataBR();
        getDataVTM();
        getDataLS();
        getDataKBJ();