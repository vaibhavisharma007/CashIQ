document.getElementById('predict-button').addEventListener('click', async () => {
    const input = document.getElementById('image-input');
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
        const img = new Image();
        img.onload = async () => {
            const tensor = tf.browser.fromPixels(img);
            const resized = tf.image.resizeBilinear(tensor, [180, 180]);
            const batched = resized.expandDims();
            const normalized = batched.div(tf.scalar(255));
            const prediction = await model.predict(normalized).data();
            const labels = ['label1', 'label2', 'label3', 'label4', 'label5'];
            const maxIndex = prediction.indexOf(Math.max(...prediction));
            document.getElementById('result').innerText = `Prediction
        }
    }
}