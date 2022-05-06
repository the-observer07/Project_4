import React from "react";

const top10 = () => {
    return (
        <div>
            <div className="int-container">
                <div className="holder">
                    <br />
                    <h2 className="header">QUERY YOUR MOONSHOT</h2>
                    <br />
                    <DropdownList
                        data={aggregatedArray}
                        onChange={handleSearchAggregate}
                    />
                    <br />
                    <TokenList id={id} setId={setId} />
                    {content}
                </div>
            </div>
        </div>
    );
};

export default top10;
