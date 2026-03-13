let selectedRole = "";

function selectRole(role) {
    selectedRole = role;
    
    // Remove active class from both
    document.getElementById('workerCard').classList.remove('active');
    document.getElementById('userCard').classList.remove('active');
    
    // Add active class to selected
    if(role === 'Worker') {
        document.getElementById('workerCard').classList.add('active');
    } else {
        document.getElementById('userCard').classList.add('active');
    }
}

function goToNextPage() {
    const name = document.getElementById('userName').value.trim();
    const policyAccepted = document.getElementById('policyCheck').checked;

    if (!selectedRole) {
        alert("দয়া করে Worker অথবা User নির্বাচন করুন।");
        return;
    }

    if (name === "") {
        alert("দয়া করে আপনার নাম লিখুন।");
        return;
    }

    if (!policyAccepted) {
        alert("দয়া করে আমাদের পলিসি মেনে টিক দিন।");
        return;
    }

    // LocalStorage এ ডেটা সেভ করা হচ্ছে পরের পেজে ব্যবহারের জন্য
    localStorage.setItem('role', selectedRole);
    localStorage.setItem('userName', name);

    // পরের পেজে নিয়ে যাওয়া (২য় পেজ)
    // role অনুযায়ী আলাদা পেজ হতে পারে অথবা কমন সাইন ইন পেজ
    window.location.href = "page2.html"; 
}
