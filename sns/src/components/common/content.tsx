import * as React from 'react';
import '../styles/css/content.css';
import avata_1 from '../styles/image/avata-1.png';
import video_icon from '../styles/image/Video.png';
import post_image_1 from '../styles/image/post_image_1.png';
import post_image_2 from '../styles/image/post_image_2.png';
import avata_2 from '../styles/image/avata.jpg';
import avata_3 from '../styles/image/avata_2.jpg';
import avata_4 from '../styles/image/avata_3.jpg';
import avata_5 from '../styles/image/avata_5.jpg';
import gmail_icont from '../styles/image/gmail.png';

export const postInput = (postText: any) =>
    <div className="post-insert" >
        <div className="user-image col-md-1">
            <img src={avata_1} alt="toannv" className="user-avata" />
        </div>
        <div className="post-content col-md-10">
            <div className="username">
                <h5><a href="toannv">ToanNV</a></h5>
            </div>
            <div className="post-content">
                <p>{postText}</p>
            </div>
            <div className="post-info">
                <div className="col-md-4">
                    <a href="like">like</a>
                </div>
                <div className="col-md-4">
                    <a href="coment" >comment</a>
                </div>
                <div className="col-md-4">
                    <a href="share">share</a>
                </div>
            </div>
        </div>
    </div>

export const suggetTest = (follow: any, followStatus: any) =>
    <div className="sugges">
        <div className="sugget-following row">
            <div className="follwing-left col-md-2">
                <img className="follwing-image" src={avata_3} />
            </div>
            <div className="follwing-right col-md-8">
                <a href="love_cat">Takimoto kusiya</a>
                <p className="sugget-status">@MinhJanpan</p>
                <button onClick={followStatus} type="submit" className="follwing-button">{follow}</button>
            </div>
        </div>
    </div>
class Content extends React.Component<any, any> {
    public textInput: string[] = [];
    // init state with constructor
    constructor(props: any) {
        super(props);
        this.state = {
            css: '.action-form-post{visibility: hidden;}',
            activePost: '.post-insert{visibility: hidden;}',
            textInput: '',
            follow: 'follow'
        };
        this.handleChange = this.handleChange.bind(this);
        this.hiddenPostForm = this.hiddenPostForm.bind(this);
        this.getPostTextInput = this.getPostTextInput.bind(this);
        this.followStatus = this.followStatus.bind(this);
    }

    // show textarea post form
    public handleChange(): void {
        this.setState({ css: '.action-form-post{visibility: visible;}' });
    }

    // hidden post button
    public hiddenPostForm(): void {
        if(this.state.textInput !== null){
            this.textInput.push(this.state.textInput);
            alert(this.textInput);
            this.setState({ css: '.action-form-post{visibility: hidden;}', activePost: '.post-insert{visibility: visible;}', textInput: '' });
        }else{
            alert('Enter anything!!');
        }
    }

    // get post of text
    public getPostTextInput(e: React.FormEvent<HTMLInputElement>): void {
        this.setState({ textInput: e.currentTarget.value });
    }
    // following
    public followStatus(): void {
        switch (this.state.follow) {
            case 'follow': {
                this.setState({ follow: 'following' });
                break;
            }
            case 'following': {
                this.setState({ follow: 'follow' });
                break;
            }
            default: {
                this.setState({ follow: 'follow' });
                break;
            }

        }
    }
    public render() {
        return (
            <div className="main-content">
                <div className="content">
                    {/* left content */}
                    <div className="col-md-3 left-content">
                        <div className="row">
                            <div className="col-md-20">
                                <div className="block-1 col-md-16">
                                    <div className="left-first">
                                        &nbsp;
                                    </div>
                                    <div className="user-status">
                                        <div className="user-info">
                                            <img className="avata-main col-md-12" src={avata_2} />
                                            <div className=" col-md-7">
                                                <a href="toannv">Toan Nguyen</a>
                                                <p className="nickname" >@Toannv_bk</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-16">
                                    <div className="col-md-4">
                                        Friends 25
                                </div>
                                    <div className="col-md-4">
                                        Following 20
                                </div>
                                    <div className="col-md-4">
                                        Post 10
                                </div>
                                </div>
                            </div>
                            <div className="col-md-12 block-2">
                                <h5>Suggestion for you. </h5>
                                <div className="sugges">
                                    <div className="sugget-content">
                                        <a href="love_cat">#love cat group</a>
                                        <p className="sugget-status">12,7K post</p>
                                    </div>
                                    <div className="sugget-content">
                                        <a href="love_">#HTML Entities fanpage</a>
                                        <p className="sugget-status">12,5K post</p>
                                    </div>
                                    <div className="sugget-content">
                                        <a href="love_">#Mediado company fanpage</a>
                                        <p className="sugget-status">126K post</p>
                                    </div>
                                    <div className="sugget-content">
                                        <a href="love_">#lunascape company fanpage</a>
                                        <p className="sugget-status">126K post</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* main content show user of post */}
                    <div className="col-md-5 mid-content">
                        {/* form post */}
                        <div className="form-post col-md-4">
                            <div className="post-left">
                                <img className="avata-image" src={avata_1} alt="user avata" />
                            </div>
                            <div className="post-right" >
                                <div onClick={this.handleChange} >
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="post"
                                        placeholder="What are you doing?"
                                        value={this.state.textInput}
                                        onChange={this.getPostTextInput}
                                    />
                                </div>
                                <div className="action-form-post">
                                    <style>{this.state.css}</style>
                                    <div className="media-post">
                                        <a href="toannv" type="file"><img src={video_icon} /></a>
                                    </div>
                                    <div className="post-button">
                                        <button type="button" className="bt-post btn btn-info" onClick={this.hiddenPostForm}>Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* all post show in here */}
                        <div className="timeline">
                            {/* post input */}
                            <style>{this.state.activePost}</style>
                            {this.textInput.map(text => postInput(text))}
                            {/* post 1 */}
                            <div className="post" >
                                <div className="user-image col-md-1">
                                    <img src={avata_1} alt="toannv" className="user-avata" />
                                </div>
                                <div className="post-content col-md-10">
                                    <div className="username">
                                        <h5><a href="toannv">ToanNV</a></h5>
                                    </div>
                                    <div className="post-content">
                                        <p>Components are he main building block of a React application. A component represents a self-contained piece of UI. A component will usually display some data and be able handle some kind of user interaction.</p>
                                    </div>
                                    <div className="post-info">
                                        <div className="col-md-4">
                                            <a href="like">like</a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="coment" >comment</a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="share">share</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Post 2 */}
                            <div className="post" >
                                <div className="user-image col-md-1">
                                    <img src={avata_1} alt="toannv" className="user-avata" />
                                </div>
                                <div className="post-content col-md-10">
                                    <div className="username">
                                        <h5><a href="toannv">ToanNV</a></h5>
                                    </div>
                                    <div className="post-content">
                                        <p>That @types/ prefix means that we also want to get the declaration files for React and React-DOM. Usually when you import a path like "react", it will look inside of the react package itself; however, not all packages include declaration files, so TypeScript also looks in the @types/react package as well. You’ll see that we won’t even have to think about this later on.</p>
                                    </div>
                                    <div className="post-image">
                                        <img className="image-of-post" src={post_image_1} alt="post image" />
                                    </div>
                                    <div className="post-info">
                                        <div className="col-md-4">
                                            <a href="like">like</a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="coment" >comment</a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="share">share</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Post 3 */}
                            <div className="post" >
                                <div className="user-image col-md-1">
                                    <img src={avata_1} alt="toannv" className="user-avata" />
                                </div>
                                <div className="post-content col-md-10">
                                    <div className="username">
                                        <h5><a href="toannv">ToanNV</a></h5>
                                    </div>
                                    <div className="post-content">
                                        <p>TypeScript files will start out in your src folder, run through the TypeScript compiler, then webpack, and end up in a bundle.js file in dist. Any components that we write will go in the src/components folder.</p>
                                    </div>
                                    <div className="post-image">
                                        <img className="image-of-post" src={post_image_2} alt="post image" />
                                    </div>
                                    <div className="post-info">
                                        <div className="col-md-4">
                                            <a href="like">like</a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="coment" >comment</a>
                                        </div>
                                        <div className="col-md-4">
                                            <a href="share">share</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* right content */}
                    <div className="col-md-3 right-content">
                        {/* Following */}
                        <div className="col-md-12 block-2">
                            <h5>Suggestion following for you. </h5>
                            <a href="reload">・Reload</a><a href="View all">・View all</a>
                            {/* sugget 1 */}
                            {suggetTest(this.state.follow, this.followStatus)}
                            {/* sugget 2 */}
                            <div className="sugges">
                                <div className="sugget-following row">
                                    <div className="follwing-left col-md-2">
                                        <img className="follwing-image" src={avata_3} />
                                    </div>
                                    <div className="follwing-right col-md-8">
                                        <a href="love_cat">Nguyen Hai Minh Japan</a>
                                        <p className="sugget-status">@MinhJanpan</p>
                                        <button type="submit" className="follwing-button">Follow</button>
                                    </div>
                                </div>
                            </div>
                            {/* sugget 3 */}
                            <div className="sugges">
                                <div className="sugget-following row">
                                    <div className="follwing-left col-md-2">
                                        <img className="follwing-image" src={avata_4} />
                                    </div>
                                    <div className="follwing-right col-md-8">
                                        <a href="love_cat">John Son Japan</a>
                                        <p className="sugget-status">@JohnSonJanpan</p>
                                        <button type="submit" className="follwing-button">Follow</button>
                                    </div>
                                </div>
                            </div>
                            {/* sugget 4 */}
                            <div className="sugges">
                                <div className="sugget-following row">
                                    <div className="follwing-left col-md-2">
                                        <img className="follwing-image" src={avata_5} />
                                    </div>
                                    <div className="follwing-right col-md-8">
                                        <a href="love_cat">Martin Garix</a>
                                        <p className="sugget-status">@MartinGarix</p>
                                        <button type="submit" className="follwing-button">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Search friend */}
                        <div className="search-friend col-md-12">
                            <div className="gmail-icon">
                                <img className="gmail-icon-image" src={gmail_icont} />
                            </div>
                            <div className="content-suggest">
                                <h4>Search friend</h4>
                                <p className="search-friend-know">Friend you have the know</p>
                            </div>
                        </div>
                        {/* copyright */}
                        <div className="search-friend col-md-12">
                            <a className="copyright-text" href="toannv">@ copyright toannv</a>
                            &nbsp;<a className="copyright-text" href="toannv">contact us</a>
                            &nbsp;<a className="copyright-text" href="toannv">policy</a>
                            &nbsp;<a className="copyright-text" href="toannv">Center help</a>
                            &nbsp;<a className="copyright-text" href="toannv">application</a>
                            &nbsp;<a className="copyright-text" href="toannv">Job</a>
                            &nbsp;<a className="copyright-text" href="toannv">status</a>
                            &nbsp;<a className="copyright-text" href="toannv">developer</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Content;