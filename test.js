function invert(rgb, bw) {
    let channels = rgb.substring(4, rgb.length - 1).split(", ").map(channel => parseInt(channel))
    let a = channels.pop();
    if (bw) return (channels[0] * 0.299 + channels[1] * 0.587 + channels[2] * 0.114) > 186 ? "rgb(0, 0, 0, 255)" : "rgb(255, 255, 255, 255)"
    let inverted = channels.map(channel => 255 - channel);
    inverted.push(a)
    return `rgb(${inverted.join(', ')})`
}

