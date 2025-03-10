// 初期カウントを0に設定
let count = 0;

// カウント表示の要素を取得
const countDisplay = document.getElementById('countDisplay');

// カウントボタンの要素を取得
const countBtn = document.getElementById('countBtn');

// リセットボタンの要素を取得
const resetBtn = document.getElementById('resetBtn');

// カウントを増やす関数
function incrementCount() {
    count++;
    countDisplay.textContent = count;
}

// リセットする関数
function resetCount() {
    count = 0;
    countDisplay.textContent = count;
}

// ボタンにイベントリスナーを追加
countBtn.addEventListener('click', incrementCount);
resetBtn.addEventListener('click', resetCount);

// Firebase の設定（実際の値は Firebase Console から取得）
const firebaseConfig = {
    apiKey: "AIzaSyDsK4imQ3uWcK7hyESo6hnDyQ96lsPNCZ8",
    authDomain: "nou-no-circle.firebaseapp.com",
    projectId: "nou-no-circle",
    storageBucket: "nou-no-circle.appspot.com",
    messagingSenderId: "756338805186",
    appId: "1:756338805186:web:cb740e035ac611b5baae5b",
    measurementId: "G-TWBV38P13D"
};

// Firebase 初期化
firebase.initializeApp(firebaseConfig);

// Firestore の参照を取得
const auth = firebase.auth();
const db = firebase.firestore();

// カウントデータの保存
function saveCountToFirebase() {
    db.collection('coffeeCounts').doc('user1').set({
        count: count
    });
}

// カウントが増えるたびに Firebase に保存
countBtn.addEventListener('click', () => {
    incrementCount();
    saveCountToFirebase();
});
