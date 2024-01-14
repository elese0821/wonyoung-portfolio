import React from 'react';
import CommentArea from '../comment/CommentArea';
import Comment from '../comment/Comment';
import { FaCommentAlt } from "react-icons/fa";
import useNolink from '../../hook/useNolink';

const Blog = () => {
    const noLink = useNolink();
    return (
        <div id='section' className='project'>
            <Comment />
            <div className="textWrap-tit">
                <div className="title-text">
                    <h1 text-split="" className="LoadingText">
                        Blog
                    </h1>
                </div>
            </div>

            <div className="main_grid">

                <div className="item">
                    <div className="split_text_clip">
                        <div text-split="" className="text-reg">BLOG PROJECT</div>
                        <div text-split="" className="text-reg">BLOG PROJECT</div>
                    </div>
                    <div className="item__bg"></div>
                </div>

                <div className="exp">
                    <div className="split_text_clip exp_text">
                        <p text-split="" className="text-reg">REACT 프레임워크를 활용한 SIMPLE BLOG입니다.</p>
                    </div>
                </div>

                <div className="item">
                    <div className="item__bg"></div>
                    <div className="pj01_img photo"></div>
                </div>

                <div className="item desc_01">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">INTRODUCE</p>
                    </div>
                    <p className="item_desc">
                        React로 사용자 인터페이스를 구축하였고,  Node.js로 서버 사이드 로직을 처리하였습니다.<br />
                        Firebase, MongoDB를 이용한 회원가입, 로그인, 로그아웃 기능과 게시판, 이미지 업로드 및 관리, 아바타 설정 등의 기능도 제공합니다.<br />
                        MongoDB는 데이터 저장과 관리를 위한 데이터베이스로 사용하였고, Firebase를 활용하여 사용자 인증과 관련된 서비스를 제공하였습니다.
                    </p>
                    <div className="item__bg"></div>
                </div>

                <div className="item desc_02 comment__item">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">COMMENTS</p>
                    </div>
                    <CommentArea />
                    <a href='' onClick={noLink} className="comment_icon popup__open">
                        <FaCommentAlt size={16} />
                    </a>
                    <div className="item__bg"></div>
                </div>


                <div className="item">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">GITHUB</p>
                        <p text-split="" className="text-reg">GITHUB</p>
                    </div>
                    <a href='https://github.com/elese0821/react-blog' target='_blank' className="item__bg hover_effect"></a>
                </div>

                <div className="item">
                    <div className="split_text_clip">
                        <p text-split="" className="text-reg">VIEW</p>
                        <p text-split="" className="text-reg">VIEW</p>
                    </div>
                    <a href='https://react-blog-project-7dc015162b00.herokuapp.com/' target='_blank' className="item__bg hover_effect"></a>
                </div>

                <div className="item">
                    <div className="split_text_clip">
                        <span text-split="" className="text-reg">
                            REPLY
                        </span>
                        <span text-split="" className="text-reg">
                            REPLY
                        </span>
                    </div>
                    <a href='' className="item__bg reply" onClick={noLink}></a>
                </div>

                <div className='item'>
                    <div className="split_text_clip">
                        <span text-split="" className="text-reg">
                            CLOSE
                        </span>
                        <span text-split="" className="text-reg">
                            CLOSE
                        </span>
                    </div>
                    <a href='' className="item__bg close" onClick={noLink}></a>
                </div>
            </div>
        </div>
    )
}

export default Blog