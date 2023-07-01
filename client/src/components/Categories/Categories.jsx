import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/4173484/pexels-photo-4173484.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              iPhone
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Mac
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/927802/pexels-photo-927802.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  iPad
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Tv
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2842455/pexels-photo-2842455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Accessories
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
