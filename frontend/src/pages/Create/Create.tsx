import s from './Create.module.scss';
import nft from "../../assets/MultipleNft.png"
import removeIcon from '../../assets/removeIcon.png'



const Create = () => {
 
    return (
        <section className={s.createPage}>
            <div className={s.container}>
                <form className={s.createPageContent}>
                    <div className={s.leftContent}>
                        <div className={s.contentTop}>
                            <p className={s.contentTitle}>Create single collectible</p>
                            <button type='button' className={s.switchButton}>
                                Switch to Multiple
                            </button>
                        </div>
                        <h2 className={s.uploadTitle}>Upload file</h2>
                        <p className={s.uploadContenttTitle}>Drag or choose your file to upload</p>
                        <div className={s.uploadContent}>
                            <input
                                type="file"
                                className={s.fileInput}
                            />
                        </div>
                        <h2 className={s.uploadDetails}>Item Details</h2>
                        <div className={s.detailsBlock}>
                            <label htmlFor="name"  >ITEM NAME</label>
                            <input
                             
                                type="text"
                                name='name'
                                id='name'
                                placeholder='e. g. "Redeemable Bitcoin Card with logo"'
                                className={s.detailsFiled}
                            />
                        </div>
                        <div className={s.detailsBlock}>
                            <label htmlFor="description" >DESCRIPTION</label>
                            <input
                                type="text"
                                name='description'
                                id='description'
                                placeholder='e. g. “After purchasing you will able to recived the logo...”'
                                className={s.detailsFiled}
                            />
                        </div>
                        <span className={s.line}></span>
                        <div className={s.detailsInfo}>
                            <label htmlFor="start">Choose Date</label>
                            <input
                                type="date"
                                id="start"
                                name="auctionEndTime"
                                min="2025-02-09"
                                max="2030-02-09"
                            />
                        </div>
                        <div className={s.detailsInfo}>
                            <div className={s.detailsInfoLeft}>
                                <h3>Instant sale price</h3>
                                <p>Enter the price for which the item will be instantly sold</p>
                            </div>
                          
                        </div>
                     
                        <div className={s.detailsCollection}>
                            <button type='submit' className={s.createNft}>
                                Create item
                            </button>
                        </div>
                    </div>
                    <div className={s.rightContent}>
                        <div className={s.rightBlock}>
                            <h3 className={s.previewTitle}>Preview</h3>
                            <img
                                src={nft}
                                alt="uploaded-preview"
                                className={s.previeImg}
                            />
                            <div className={s.nftPreviewInfo}>
                                <p className={s.nftTitle}>NFT TITLE</p>
                                <p className={s.nftPrice}>2.45 ETH</p>
                            </div>
                            <button type='button' className={s.nftDeleteButton}>
                                <img src={removeIcon} alt="remove-icon" className={s.removeIcon} />
                                Clear all
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Create
