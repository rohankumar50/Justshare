import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID cNqblB--7u_rHhyJmGd2X7XV41fGhdANVOX4FfeNhE0"
    }
})