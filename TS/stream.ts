import axios from "axios";

interface YoutubeVideoListResponse {
    kind: string;
    etag: string;
    items: YoutubeVideoItems[];
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
        [key: string]: any;
    };
    [key: string]: any;
}

interface YoutubeVideoItems {
    kind: string;
    etag: string;
    id: string;
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: YoutubeThumbnails;
        channelTitle: string;
        tags: string[];
        categoryId: string;
        liveBroadcastContent: string;
        localized: {
            title: string;
            description: string;
        };
        defaultAudioLanguage: string;
        [key: string]: any;
    };
    liveStreamingDetails: {
        actualStartTime: string;
        scheduledStartTime: string;
        concurrentViewers: string;
        activeLiveChatId: string;
        [key: string]: any;
    };
    [key: string]: any;
}

interface YoutubeThumbnails {
    default: {
        url: string;
        width: number;
        height: number;
    };
    medium: {
        url: string;
        width: number;
        height: number;
    };
    high: ThumbnailObject;
    maxres: ThumbnailObject;
}

interface ThumbnailObject {
    url: string;
    width: number;
    height: number;
}


async function get_stream_info(
    id: string
): Promise<YoutubeVideoListResponse> {
    const key = "AIzaSyC2KTyWYFiB3P0eDT3Sjwin1Nyqtb7_kxc";

    const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos`,
        {
            params: {
                part: ["snippet", "liveStreamingDetails"].join(","),
                id: id,
                key: key,
            },
        }
    );

    const data: YoutubeVideoListResponse = res.data;
    return data;
}

(async () => {
    const id = "9wF4hxa7w40";

    const stream_info = await get_stream_info(id);

    let isStreaming = true;
    if (stream_info.items.length > 0) {
        isStreaming = stream_info.items[0].snippet.liveBroadcastContent === "live";
    } else {
        isStreaming = false;
    }

    console.log(isStreaming);
})();