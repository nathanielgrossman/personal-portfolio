axios.get('https://kboykyzml8.execute-api.us-west-2.amazonaws.com/prod/get-random-18a58t9c')
    .then(response => JSON.parse(response.data.body))
    .then(image => {
        let markup = `<picture class="picture"><source type="image/webp" class="picture" srcset="https://s3-us-west-1.amazonaws.com/18a58t9c/webp/${image._id}.webp"><img class="picture" alt="${image.original}" src="https://s3-us-west-1.amazonaws.com/18a58t9c/jpg/${image._id}.jpg"></picture>`;
        let contrast = invert(image.color, true);
        
        let links = document.getElementsByTagName('a')
        for (let i in links) {
            if (contrast.length === 17) {
                links[i].className = 'linkdk'
            } else {
                links[i].className = 'linklt'
            }
        }

        document.body.style.background = image.color;
        document.body.style.color = contrast;
        document.getElementById('image').innerHTML = markup;
        console.log(image.color);
    })
    .catch(err => console.log(err))

function invert(rgb, bw) {
    let channels = rgb.substring(4, rgb.length - 1).split(", ").map(channel => parseInt(channel))
    let a = channels.pop();
    if (bw) return (channels[0] * 0.299 + channels[1] * 0.587 + channels[2] * 0.114) > 186 ? "rgb(0, 0, 0, 255)" : "rgb(255, 255, 255, 255)"
    let inverted = channels.map(channel => 255 - channel);
    inverted.push(a)
    return `rgb(${inverted.join(', ')})`
}