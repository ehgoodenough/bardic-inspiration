import Urrl from "urrl"
import Fetchquest from "fetchquest"
import * as iso8601 from "iso8601-duration"

const YT_DATA_API_KEY = "AIzaSyBVwAxamNJ_KFWCIkLuNXK9htJylIAEmp0"
const YT_DATA_PLAYLIST_URRL = Urrl("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults={maxResults}&playlistId={playlistId}&key={apiKey}")
const YT_DATA_VIDEO_URRL = Urrl("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id={videoIds}&key={apiKey}")

export default class YoutubeData {
    static async retrievePlaylistVideos(playlistId = "PLBCF2DAC6FFB574DE") {
        const videoIds = await Youtube.retrievePlaylistVideoIds(playlistId)
        const videos = await Youtube.retrieveVideos(videoIds)
        return videos
    }
    static retrievePlaylistVideoIds(playlistId) {
        return Fetchquest({
            "method": "GET",
            "url": YT_DATA_PLAYLIST_URRL({
                "apiKey": YT_DATA_API_KEY,
                "playlistId": playlistId,
                "maxResults": 100,
            })
        }).then((response) => {
            return response.items.map((item) => {
                return item.contentDetails.videoId
            })
        })
    }
    static retrievePlaylistVideos(playlistId) {
        return Fetchquest({
            "method": "GET",
            "url": YT_DATA_PLAYLIST_URRL({
                "apiKey": YT_DATA_API_KEY,
                "playlistId": playlistId,
                "maxResults": 100,
            })
        }).then((response) => {
            return response.items.map((item) => {
                return {
                    "youtubeId": item.contentDetails.videoId,
                    "title": item.snippet.title,
                    "thumbnailUrl": item.snippet.thumbnails.maxres?.url
                        || item.snippet.thumbnails.standard?.url
                        || item.snippet.thumbnails.high?.url
                        || item.snippet.thumbnails.medium?.url
                        || item.snippet.thumbnails.default?.url,
                }
            })
        })
    }
    static retrieveVideos(videoIds) {
        if(videoIds instanceof Array) {
            videoIds = videoIds.join(",")
            // videoIds = encodeURIComponent(videoIds)
        }
        return Fetchquest({
            "method": "GET",
            "url": YT_DATA_VIDEO_URRL({
                "apiKey": YT_DATA_API_KEY,
                "videoIds": videoIds
            })
        }).then((response) => {
            return response.items.map((item) => {
                return {
                    "youtubeId": item.id,
                    "title": item.snippet.title,
                    "thumbnailUrl": item.snippet.thumbnails.maxres?.url
                        || item.snippet.thumbnails.standard?.url
                        || item.snippet.thumbnails.high?.url
                        || item.snippet.thumbnails.medium?.url
                        || item.snippet.thumbnails.default?.url,
                    // "duration": iso8601.toSeconds(iso8601.parse(item.contentDetails.duration)),
                    // "tags": item.snippet.tags,
                }
            })
        })
    }
}
