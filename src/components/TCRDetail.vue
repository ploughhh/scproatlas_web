<template>
  <el-container v-loading="isLoading">
    <el-header>
      <Menus />
    </el-header>

    <el-main
      style="
        margin-left: auto;
        width: 1600px;
        margin-right: auto;
        overflow: hidden;
        margin-bottom: 30px;
      "
    >
      <div>
        <div>
          <h1
            class="title"
            style="
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Detail information of {{ route.query.Species }}
            {{ route.query.Tissue }}
          </h1>
        </div>
        <div
          style="
            margin-left: 250px;
            width: 100%;
            margin-right: auto;
            float: left;
          "
        >
          <el-table :data="detailData" border :show-header="false" fit>
            <el-table-column
              sortable
              prop="col11"
              width="380"
            ></el-table-column>
            <el-table-column
              sortable
              prop="col12"
              width="720"
            ></el-table-column>
          </el-table>
        </div>
      </div>
      <h1
        class="title"
        style="
          background-color: #248067;
          margin: 20px 0 10px 0;
          padding: 10px 0 40px 0;
          width: 100%;
          height: 20px;
          float: left;
        "
      >
        CDR3 sequence length distribution between age groups
        <img
          src="../../public/images/icon/question.png"
          style="height: 30px; width: 30px; margin-right: 20px; float: right"
          alt="image"
          @mouseenter="isHoveringbar = true"
          @mouseleave="isHoveringbar = false"
        />
        <div
          v-if="isHoveringbar"
          style="
            position: relative;
            margin-left: 1224px;
            top: -35px;
            left: -840px;
            height: 44px;
            width: 50%;
            background-color: #303133;
          "
        >
          <p
            style="
              text-align: justify;
              padding: 10px;
              font-size: 16px;
              line-height: 1.5;
              min-width: 10px;
              word-wrap: break-word;
              color: white;
            "
          >
            The overall TCRs length Distribution in different age group.
          </p>
        </div>
      </h1>
      <template v-if="route.query.Number === 'AMO-TB-001'">
        <div class="graph">
          <div
            id="graphNum1First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Proportion of antigen specificity of the detected TCRs in different
            age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHoveringpie = true"
              @mouseleave="isHoveringpie = false"
            />
            <div
              v-if="isHoveringpie"
              style="
                position: relative;
                margin-left: 1224px;
                top: -47px;
                left: -1063px;
                height: 60px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The proportion of antigen specificity of detected TCRs refers to
                the relative abundance or frequency of T cell receptor (TCR)
                sequences that are specific to different antigens. The antigen
                specificity was obtained from VDJdb.
              </p>
            </div>
          </h1>
          <div
            id="graphNum1Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum1Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum1Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum1Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-002'">
        <div class="graph">
          <div
            id="graphNum2First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Proportion of antigen specificity of the detected TCRs in different
            age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHoveringpie = true"
              @mouseleave="isHoveringpie = false"
            />
            <div
              v-if="isHoveringpie"
              style="
                position: relative;
                margin-left: 1224px;
                top: -47px;
                left: -1063px;
                height: 60px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The proportion of antigen specificity of detected TCRs refers to
                the relative abundance or frequency of T cell receptor (TCR)
                sequences that are specific to different antigens. The antigen
                specificity was obtained from VDJdb.
              </p>
            </div>
          </h1>
          <div
            id="graphNum2Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum2Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum2Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum2Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-003'">
        <div class="graph">
          <div
            id="graphNum3First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Proportion of antigen specificity of the detected TCRs in different
            age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHoveringpie = true"
              @mouseleave="isHoveringpie = false"
            />
            <div
              v-if="isHoveringpie"
              style="
                position: relative;
                margin-left: 1224px;
                top: -47px;
                left: -1063px;
                height: 60px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The proportion of antigen specificity of detected TCRs refers to
                the relative abundance or frequency of T cell receptor (TCR)
                sequences that are specific to different antigens. The antigen
                specificity was obtained from VDJdb.
              </p>
            </div>
          </h1>
          <div
            id="graphNum3Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum3Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum3Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum3Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-004'">
        <div class="graph">
          <div
            id="graphNum4First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Proportion of antigen specificity of the detected TCRs in different
            age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHoveringpie = true"
              @mouseleave="isHoveringpie = false"
            />
            <div
              v-if="isHoveringpie"
              style="
                position: relative;
                margin-left: 1224px;
                top: -47px;
                left: -1063px;
                height: 60px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The proportion of antigen specificity of detected TCRs refers to
                the relative abundance or frequency of T cell receptor (TCR)
                sequences that are specific to different antigens. The antigen
                specificity was obtained from VDJdb.
              </p>
            </div>
          </h1>
          <div
            id="graphNum4Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum4Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum4Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum4Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-005'">
        <div class="graph">
          <div
            id="graphNum5First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Proportion of antigen specificity of the detected TCRs in different
            age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHoveringpie = true"
              @mouseleave="isHoveringpie = false"
            />
            <div
              v-if="isHoveringpie"
              style="
                position: relative;
                margin-left: 1224px;
                top: -47px;
                left: -1063px;
                height: 60px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The proportion of antigen specificity of detected TCRs refers to
                the relative abundance or frequency of T cell receptor (TCR)
                sequences that are specific to different antigens. The antigen
                specificity was obtained from VDJdb.
              </p>
            </div>
          </h1>
          <div
            id="graphNum5Third"
            style="
              margin: 30px 15px 50px 380px;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum5Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum5Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-006'">
        <div class="graph">
          <div
            id="graphNum6First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Proportion of antigen specificity of the detected TCRs in different
            age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHoveringpie = true"
              @mouseleave="isHoveringpie = false"
            />
            <div
              v-if="isHoveringpie"
              style="
                position: relative;
                margin-left: 1224px;
                top: -47px;
                left: -1063px;
                height: 60px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The proportion of antigen specificity of detected TCRs refers to
                the relative abundance or frequency of T cell receptor (TCR)
                sequences that are specific to different antigens. The antigen
                specificity was obtained from VDJdb.
              </p>
            </div>
          </h1>
          <div
            id="graphNum6Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum6Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum6Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum6Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-007'">
        <div class="graph">
          <div
            id="graphNum7First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Proportion of antigen specificity of the detected TCRs in different
            age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHoveringpie = true"
              @mouseleave="isHoveringpie = false"
            />
            <div
              v-if="isHoveringpie"
              style="
                position: relative;
                margin-left: 1224px;
                top: -47px;
                left: -1063px;
                height: 60px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The proportion of antigen specificity of detected TCRs refers to
                the relative abundance or frequency of T cell receptor (TCR)
                sequences that are specific to different antigens. The antigen
                specificity was obtained from VDJdb.
              </p>
            </div>
          </h1>
          <div
            id="graphNum7Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum7Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum7Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum7Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-008'">
        <div class="graph">
          <div
            id="graphNum8First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Proportion of antigen specificity of the detected TCRs in different
            age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHoveringpie = true"
              @mouseleave="isHoveringpie = false"
            />
            <div
              v-if="isHoveringpie"
              style="
                position: relative;
                margin-left: 1224px;
                top: -47px;
                left: -1063px;
                height: 60px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The proportion of antigen specificity of detected TCRs refers to
                the relative abundance or frequency of T cell receptor (TCR)
                sequences that are specific to different antigens. The antigen
                specificity was obtained from VDJdb.
              </p>
            </div>
          </h1>
          <div
            id="graphNum8Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum8Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum8Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum8Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-009'">
        <div class="graph">
          <div
            id="graphNum9First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Proportion of antigen specificity of the detected TCRs in different
            age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHoveringpie = true"
              @mouseleave="isHoveringpie = false"
            />
            <div
              v-if="isHoveringpie"
              style="
                position: relative;
                margin-left: 1224px;
                top: -47px;
                left: -1063px;
                height: 60px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The proportion of antigen specificity of detected TCRs refers to
                the relative abundance or frequency of T cell receptor (TCR)
                sequences that are specific to different antigens. The antigen
                specificity was obtained from VDJdb.
              </p>
            </div>
          </h1>
          <div
            id="graphNum9Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum9Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum9Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum9Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-010'">
        <div class="graph">
          <div
            id="graphNum10First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Proportion of antigen specificity of the detected TCRs in different
            age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHoveringpie = true"
              @mouseleave="isHoveringpie = false"
            />
            <div
              v-if="isHoveringpie"
              style="
                position: relative;
                margin-left: 1224px;
                top: -47px;
                left: -1063px;
                height: 60px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The proportion of antigen specificity of detected TCRs refers to
                the relative abundance or frequency of T cell receptor (TCR)
                sequences that are specific to different antigens. The antigen
                specificity was obtained from VDJdb.
              </p>
            </div>
          </h1>
          <div
            id="graphNum10Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum10Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum10Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum10Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-011'">
        <div class="graph">
          <div
            id="graphNum11First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Proportion of antigen specificity of the detected TCRs in different
            age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHoveringpie = true"
              @mouseleave="isHoveringpie = false"
            />
            <div
              v-if="isHoveringpie"
              style="
                position: relative;
                margin-left: 1224px;
                top: -47px;
                left: -1063px;
                height: 60px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The proportion of antigen specificity of detected TCRs refers to
                the relative abundance or frequency of T cell receptor (TCR)
                sequences that are specific to different antigens. The antigen
                specificity was obtained from VDJdb.
              </p>
            </div>
          </h1>
          <div
            id="graphNum11Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum11Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum11Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum11Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-012'">
        <div class="graph">
          <div
            id="graphNum12First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Proportion of antigen specificity of the detected TCRs in different
            age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHoveringpie = true"
              @mouseleave="isHoveringpie = false"
            />
            <div
              v-if="isHoveringpie"
              style="
                position: relative;
                margin-left: 1224px;
                top: -47px;
                left: -1063px;
                height: 60px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The proportion of antigen specificity of detected TCRs refers to
                the relative abundance or frequency of T cell receptor (TCR)
                sequences that are specific to different antigens. The antigen
                specificity was obtained from VDJdb.
              </p>
            </div>
          </h1>
          <div
            id="graphNum12Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum12Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum12Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum12Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-013'">
        <div class="graph">
          <div
            id="graphNum13First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum13Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum13Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-014'">
        <div class="graph">
          <div
            id="graphNum14First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum14Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum14Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-015'">
        <div class="graph">
          <div
            id="graphNum15First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum15Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum15Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-016'">
        <div class="graph">
          <div
            id="graphNum16First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum16Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum16Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-017'">
        <div class="graph">
          <div
            id="graphNum17First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Proportion of antigen specificity of the detected TCRs in different
            age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHoveringpie = true"
              @mouseleave="isHoveringpie = false"
            />
            <div
              v-if="isHoveringpie"
              style="
                position: relative;
                margin-left: 1224px;
                top: -47px;
                left: -1063px;
                height: 60px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The proportion of antigen specificity of detected TCRs refers to
                the relative abundance or frequency of T cell receptor (TCR)
                sequences that are specific to different antigens. The antigen
                specificity was obtained from VDJdb.
              </p>
            </div>
          </h1>
          <div
            id="graphNum17Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum17Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum17Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum17Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum17Sixth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum17Seventh"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-018'">
        <div class="graph">
          <div
            id="graphNum18First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum18Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum18Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum18Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-019'">
        <div class="graph">
          <div
            id="graphNum19First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum19Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum19Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <template v-if="route.query.Number === 'AMO-TB-020'">
        <div class="graph">
          <div
            id="graphNum20First"
            style="
              margin: 30px 15px 50px 0;
              width: 95%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Proportion of antigen specificity of the detected TCRs in different
            age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHoveringpie = true"
              @mouseleave="isHoveringpie = false"
            />
            <div
              v-if="isHoveringpie"
              style="
                position: relative;
                margin-left: 1224px;
                top: -47px;
                left: -1063px;
                height: 60px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                The proportion of antigen specificity of detected TCRs refers to
                the relative abundance or frequency of T cell receptor (TCR)
                sequences that are specific to different antigens. The antigen
                specificity was obtained from VDJdb.
              </p>
            </div>
          </h1>
          <div
            id="graphNum20Second"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum20Third"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <h1
            class="title"
            style="
              background-color: #248067;
              margin: 20px 0 10px 0;
              padding: 10px 0 40px 0;
              width: 100%;
              height: 20px;
              float: left;
            "
          >
            Average V-J gene utilization between different age group
            <img
              src="../../public/images/icon/question.png"
              style="
                height: 30px;
                width: 30px;
                margin-right: 20px;
                float: right;
              "
              alt="image"
              @mouseenter="isHovering3d = true"
              @mouseleave="isHovering3d = false"
            />
            <div
              v-if="isHovering3d"
              style="
                position: relative;
                margin-left: 1224px;
                top: -65px;
                left: -1107px;
                height: 89px;
                width: 80%;
                background-color: #303133;
              "
            >
              <p
                style="
                  text-align: justify;
                  padding: 10px;
                  font-size: 16px;
                  line-height: 1.5;
                  min-width: 10px;
                  word-wrap: break-word;
                  color: white;
                "
              >
                3dbar: indicate the frequency of gene segments appear together
                in TCR sequences. X-axis: the V gene segments. Y-axis: the J
                gene segments. Z-axis: the frequency of V and J gene segments
                appear together. Every bar represents a unique V-J gene
                utilization. The color and the height of each bar represent the
                V-J gene utilization frequency in upload file. The worm color
                and the higher of the bar represents the higher of frequency.
              </p>
            </div>
          </h1>
          <div
            id="graphNum20Fourth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
          <div
            id="graphNum20Fifth"
            style="
              margin: 30px 15px 50px 0;
              width: 48%;
              height: 500px;
              float: left;
            "
          ></div>
        </div>
      </template>
      <h1
        class="title"
        style="
          background-color: #248067;
          margin: 20px 0 10px 0;
          padding: 10px 0 40px 0;
          width: 100%;
          height: 20px;
          float: left;
        "
      >
        The frequency of CDR3 and corresponded VDJ genes in different age group
        <img
          src="../../public/images/icon/question.png"
          style="height: 30px; width: 30px; margin-right: 20px; float: right"
          alt="image"
          @mouseenter="isHoveringvdj = true"
          @mouseleave="isHoveringvdj = false"
        />
        <div
          v-if="isHoveringvdj"
          style="
            position: relative;
            margin-left: 1224px;
            top: -52px;
            left: -1107px;
            height: 68px;
            width: 80%;
            background-color: #303133;
          "
        >
          <p
            style="
              text-align: justify;
              padding: 10px;
              font-size: 16px;
              line-height: 1.5;
              min-width: 10px;
              word-wrap: break-word;
              color: white;
            "
          >
            The frequency is calculated by Normalized frequency is computed as
            geometric mean of clonotype frequencies that comprise a given joint
            clonotype in intersected samples. If clonotype is missing, its
            frequency is set to 1e-9.
          </p>
        </div>
      </h1>
      <div
        style="
          -webkit-text-size-adjust: 100%;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          font-size: 14px;
          line-height: 1.42857143;
          font-family: Poppins;
          box-sizing: border-box;
          float: right;
          text-align: right;
          color: #333;
        "
      >
        <label
          style="
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            font-size: 24px;
            line-height: 1.42857143;
            font-family: Poppins;
            text-align: right;
            color: #333;
            box-sizing: border-box;
            display: inline-block;
            max-width: 100%;
            margin-bottom: 15px;
            font-weight: bold;
          "
        >
          <el-input
            v-model="form.Taxonomy"
            placeholder="Please enter your search keywords"
            type="search"
            style="
              width: 340px;
              -webkit-text-size-adjust: 100%;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              margin: 0;
              font: inherit;
              color: inherit;
              font-family: Poppins;
              font-size: 18px;
              line-height: inherit;
              box-sizing: border-box;
              -webkit-appearance: none;
              margin-left: 0.5em;
            "
            aria-controls="myTable"
          />
          <el-button @click="hanldeInput">Search</el-button>
        </label>
      </div>
      <div style="margin-top: 10px; width: 99%; margin-left: 15px">
        <el-table :data="tcrtableData" border fit>
          <el-table-column
            sortable
            prop="Group"
            label="Group"
            width="130"
          ></el-table-column>
          <el-table-column
            sortable
            prop="frequency"
            label="frequency"
            width="170"
          ></el-table-column>
          <el-table-column
            sortable
            prop="CDR3nt"
            label="CDR3nt"
            width="380"
          ></el-table-column>
          <el-table-column
            sortable
            prop="Taxonomy"
            label="CDR3aa"
            width="260"
          ></el-table-column>
          <el-table-column
            sortable
            prop="V"
            label="V"
            width="180"
          ></el-table-column>
          <el-table-column
            sortable
            prop="D"
            label="D"
            width="110"
          ></el-table-column>
          <el-table-column
            sortable
            prop="J"
            label="J"
            width="124"
          ></el-table-column>
        </el-table>
        <el-pagination
          small
          @current-change="handelChange"
          :current-page="form.currentPage"
          :page-size="form.limit"
          background
          :total="form.total"
          layout="prev, pager, next"
          class="mt-4"
          style="margin-left: 5%"
        />
      </div>
    </el-main>
  </el-container>
</template>
<script setup>
import {
  onMounted,
  ref,
  reactive
} from "vue";
// import { onMounted, ref } from 'vue'
import { useRoute } from "vue-router";
import Menus from "../layout/menu-item";
import {
  getOptionNum1Length,
  getOptionNum1PieYoung,
  getOptionNum1PieAged,
  getOptionNum13DYoung,
  getOptionNum13DAged,
  getOptionNum2Length,
  getOptionNum2PieYoung,
  getOptionNum2PieAged,
  getOptionNum23DYoung,
  getOptionNum23DAged,
  getOptionNum3Length,
  getOptionNum3PieYoung,
  getOptionNum3PieAged,
  getOptionNum33DYoung,
  getOptionNum33DAged,
  getOptionNum4Length,
  getOptionNum4PieYoung,
  getOptionNum4PieAged,
  getOptionNum43DYoung,
  getOptionNum43DAged,
} from "@/api/bulk";
import {
  getOptionNum5Length,
  getOptionNum5PieAged,
  getOptionNum53DYoung,
  getOptionNum53DAged,
  getOptionNum6Length,
  getOptionNum6PieYoung,
  getOptionNum6PieAged,
  getOptionNum63DYoung,
  getOptionNum63DAged,
  getOptionNum7Length,
  getOptionNum7PieYoung,
  getOptionNum7PieAged,
  getOptionNum73DYoung,
  getOptionNum73DAged,
  getOptionNum8Length,
  getOptionNum8PieYoung,
  getOptionNum8PieAged,
  getOptionNum83DYoung,
  getOptionNum83DAged,
} from "@/api/cd4";
import {
  getOptionNum9Length,
  getOptionNum9PieYoung,
  getOptionNum9PieAged,
  getOptionNum93DYoung,
  getOptionNum93DAged,
  getOptionNum10Length,
  getOptionNum10PieYoung,
  getOptionNum10PieAged,
  getOptionNum103DYoung,
  getOptionNum103DAged,
  getOptionNum11Length,
  getOptionNum11PieYoung,
  getOptionNum11PieAged,
  getOptionNum113DYoung,
  getOptionNum113DAged,
  getOptionNum12Length,
  getOptionNum12PieYoung,
  getOptionNum12PieAged,
  getOptionNum123DYoung,
  getOptionNum123DAged,
} from "@/api/cd8";
import {
  getOptionNum13Length,
  getOptionNum133DYoung,
  getOptionNum133DAged,
  getOptionNum14Length,
  getOptionNum143DYoung,
  getOptionNum143DAged,
  getOptionNum15Length,
  getOptionNum153DYoung,
  getOptionNum153DAged,
  getOptionNum16Length,
  getOptionNum163DYoung,
  getOptionNum163DAged,
} from "@/api/bcr";
import {
  getTcrData,
  getOptionNum17Length,
  getOptionNum17Piemerge12,
  getOptionNum17Piemerge18,
  getOptionNum17PiemergeWT,
  getOptionNum173Dmerge12,
  getOptionNum173Dmerge18,
  getOptionNum173DmergeWT,
  getOptionNum18Length,
  getOptionNum183Dmerge12,
  getOptionNum183Dmerge18,
  getOptionNum183DmergeWT,
  getOptionNum19Lengthday0,
  getOptionNum193Dday0Young,
  getOptionNum193Dday0Old,
  getOptionNum20Length,
  getOptionNum20PieYoung,
  getOptionNum20PieAged,
  getOptionNum203DYoung,
  getOptionNum203DAged,
} from "@/api/TCRDetail";
// import { getcd4lungyoung3dbarData } from '@/api/cd4lungyoung3dbar'
// import { getOptionNum73DAged } from '@/api/cd4peritonealaged3dbar'
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
require("echarts/lib/component/visualMap");
require("echarts/lib/chart/sunburst");
const route = useRoute();
const tcrtableData = ref([]);
const isLoading = ref(false);
console.log("route.query.Number", route.query.Number);
console.log("route.query.Dataset_ID", route.query.Dataset_ID);

const form = reactive({
  Group: "",
  frequency: "",
  CDR3nt: "",
  Taxonomy: "",
  V: "",
  D: "",
  J: "",
  Dataset_ID: route.query.Number,
  currentPage: 1,
  limit: 20,
  total: 0,
});

const hanldeInput = () => {
  tcrData(form);
};
const tcrData = async (query) => {
  isLoading.value = true;
  try {
    // eslint-disable-next-line no-debugger
    const res = await getTcrData(query);
    tcrtableData.value = res.data.rows;
    form.total = res.data.count;
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
  }
};

const handelChange = (val) => {
  form.currentPage = val;
  tcrData(form);
};

tcrData(form);

const pages = ref();

pages.value = {
  limit: 20,
  currentPage: 1,
  total: 20,
};
let myChart = {};

const isHoveringbar = ref(false);
const isHoveringpie = ref(false);
const isHovering3d = ref(false);
const isHoveringvdj = ref(false);
// #region 第一个表
const Data1 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-001",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Liver",
    },
    {
      col11: "Data type",
      col12: "Bulk TCRa/b-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data2 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-002",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Lung",
    },
    {
      col11: "Data type",
      col12: "Bulk TCRa/b-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data3 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-003",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Peritoneal cavity",
    },
    {
      col11: "Data type",
      col12: "Bulk TCRa/b-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data4 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-004",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Spleen",
    },
    {
      col11: "Data type",
      col12: "Bulk TCRa/b-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data5 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-005",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Liver",
    },
    {
      col11: "Data type",
      col12: "Single cell TCR-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data6 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-006",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Lung",
    },
    {
      col11: "Data type",
      col12: "Single cell TCR-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data7 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-007",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Peritoneal cavity",
    },
    {
      col11: "Data type",
      col12: "Single cell TCR-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data8 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-008",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Spleen",
    },
    {
      col11: "Data type",
      col12: "Single cell TCR-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data9 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-009",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Liver",
    },
    {
      col11: "Data type",
      col12: "Single cell TCR-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data10 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-0010",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Lung",
    },
    {
      col11: "Data type",
      col12: "Single cell TCR-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data11 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-0011",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Peritoneal cavity",
    },
    {
      col11: "Data type",
      col12: "Single cell TCR-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data12 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-0012",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Spleen",
    },
    {
      col11: "Data type",
      col12: "Single cell TCR-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data13 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-0013",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Liver",
    },
    {
      col11: "Data type",
      col12: "Single cell BCR-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data14 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-0014",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Lung",
    },
    {
      col11: "Data type",
      col12: "Single cell BCR-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data15 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-0015",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Peritoneal cavity",
    },
    {
      col11: "Data type",
      col12: "Single cell BCR-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data16 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-0016",
    },
    {
      col11: "Accession",
      col12: "GSE155006",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33271118",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Spleen",
    },
    {
      col11: "Data type",
      col12: "Single cell BCR-seq",
    },
    {
      col11: "Sample size",
      col12: "6",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Aged: 17 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data17 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-0017",
    },
    {
      col11: "Accession",
      col12: "10.5281/zenodo.4264462",
    },
    {
      col11: "Database",
      col12: "Zenodo",
    },
    {
      col11: "Publication",
      col12:
        "Single-cell immune repertoire and transcriptome sequencing reveals that clonally expanded and transcriptionally distinct lymphocytes populate the aged central nervous system in mice",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33622131",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Central nervous system",
    },
    {
      col11: "Data type",
      col12: "Single cell TCR-seq",
    },
    {
      col11: "Sample size",
      col12: "12",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Middle: 12 months old; Aged: 18 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data18 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-0014",
    },
    {
      col11: "Accession",
      col12: "10.5281/zenodo.4264462",
    },
    {
      col11: "Database",
      col12: "Zenodo",
    },
    {
      col11: "Publication",
      col12:
        "Single-cell immune repertoire and transcriptome sequencing reveals that clonally expanded and transcriptionally distinct lymphocytes populate the aged central nervous system in mice",
    },
    {
      col11: "Year",
      col12: "2021",
    },
    {
      col11: "Pubmed",
      col12: "33622131",
    },
    {
      col11: "Species",
      col12: "Mouse",
    },
    {
      col11: "Tissue",
      col12: "Central nervous system",
    },
    {
      col11: "Data type",
      col12: "Single cell BCR-seq",
    },
    {
      col11: "Sample size",
      col12: "12",
    },
    {
      col11: "Age group",
      col12: "Young:3 months old; Middle: 12 months old; Aged: 18 months old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "4",
    },
  ];
};
const Data19 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-0019",
    },
    {
      col11: "Accession",
      col12: "PRJNA356133",
    },
    {
      col11: "Database",
      col12: "NCBI",
    },
    {
      col11: "Publication",
      col12:
        "Phylogenetic analysis of the human antibody repertoire reveals quantitative signatures of immune senescence and aging",
    },
    {
      col11: "Year",
      col12: "2017",
    },
    {
      col11: "Pubmed",
      col12: "28096374",
    },
    {
      col11: "Species",
      col12: "Human",
    },
    {
      col11: "Tissue",
      col12: "Blood",
    },
    {
      col11: "Data type",
      col12: "Immunoglobulin heavy chain sequencing",
    },
    {
      col11: "Sample size",
      col12: "108",
    },
    {
      col11: "Age group",
      col12: "Young: 21-24 years old; Aged: 73-93 years old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "122.5",
    },
  ];
};
const Data20 = () => {
  return [
    {
      col11: "Dataset ID",
      col12: "AMO-TB-0020",
    },
    {
      col11: "Accession",
      col12: "GSE157007",
    },
    {
      col11: "Database",
      col12: "GEO",
    },
    {
      col11: "Publication",
      col12:
        "Multidimensional single-cell analysis of human peripheral blood reveals characteristic features of the immune system landscape in aging and frailty",
    },
    {
      col11: "Year",
      col12: "2022",
    },
    {
      col11: "Pubmed",
      col12: "37117750",
    },
    {
      col11: "Species",
      col12: "Human",
    },
    {
      col11: "Tissue",
      col12: "Blood",
    },
    {
      col11: "Data type",
      col12: "Single cell TCR V(D)J sequencing",
    },
    {
      col11: "Sample size",
      col12: "17",
    },
    {
      col11: "Age group",
      col12: "Young: 23-42years old; Aged: 72-100 years old",
    },
    {
      col11: "Maximum lifespan (year)",
      col12: "122.5",
    },
  ];
};
// #endregion

// 获取数据
const vdjsearchKeyword = ref("");

let detailData = [];
switch (route.query.Number) {
  case "AMO-TB-001":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-001",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Liver",
      },
      {
        col11: "Data type",
        col12: "Bulk TCRa/b-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum1Length(), containerId: "graphNum1First" },
        { option: getOptionNum1PieYoung(), containerId: "graphNum1Second" },
        { option: getOptionNum1PieAged(), containerId: "graphNum1Third" },
        { option: getOptionNum13DYoung(), containerId: "graphNum1Fourth" },
        { option: getOptionNum13DAged(), containerId: "graphNum1Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-001":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-001",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Liver",
      },
      {
        col11: "Data type",
        col12: "Bulk TCRa/b-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum1Length(), containerId: "graphNum1First" },
        { option: getOptionNum1PieYoung(), containerId: "graphNum1Second" },
        { option: getOptionNum1PieAged(), containerId: "graphNum1Third" },
        { option: getOptionNum13DYoung(), containerId: "graphNum1Fourth" },
        { option: getOptionNum13DAged(), containerId: "graphNum1Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-002":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-002",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Lung",
      },
      {
        col11: "Data type",
        col12: "Bulk TCRa/b-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum2Length(), containerId: "graphNum2First" },
        { option: getOptionNum2PieYoung(), containerId: "graphNum2Second" },
        { option: getOptionNum2PieAged(), containerId: "graphNum2Third" },
        { option: getOptionNum23DYoung(), containerId: "graphNum2Fourth" },
        { option: getOptionNum23DAged(), containerId: "graphNum2Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-003":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-003",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Peritoneal cavity",
      },
      {
        col11: "Data type",
        col12: "Bulk TCRa/b-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum3Length(), containerId: "graphNum3First" },
        { option: getOptionNum3PieYoung(), containerId: "graphNum3Second" },
        { option: getOptionNum3PieAged(), containerId: "graphNum3Third" },
        { option: getOptionNum33DYoung(), containerId: "graphNum3Fourth" },
        { option: getOptionNum33DAged(), containerId: "graphNum3Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-004":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-004",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Spleen",
      },
      {
        col11: "Data type",
        col12: "Bulk TCRa/b-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum4Length(), containerId: "graphNum4First" },
        { option: getOptionNum4PieYoung(), containerId: "graphNum4Second" },
        { option: getOptionNum4PieAged(), containerId: "graphNum4Third" },
        { option: getOptionNum43DYoung(), containerId: "graphNum4Fourth" },
        { option: getOptionNum43DAged(), containerId: "graphNum4Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-005":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-005",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Liver",
      },
      {
        col11: "Data type",
        col12: "Single cell TCR-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum5Length(), containerId: "graphNum5First" },
        { option: getOptionNum5PieAged(), containerId: "graphNum5Third" },
        { option: getOptionNum53DYoung(), containerId: "graphNum5Fourth" },
        { option: getOptionNum53DAged(), containerId: "graphNum5Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-006":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-006",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Lung",
      },
      {
        col11: "Data type",
        col12: "Single cell TCR-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum6Length(), containerId: "graphNum6First" },
        { option: getOptionNum6PieYoung(), containerId: "graphNum6Second" },
        { option: getOptionNum6PieAged(), containerId: "graphNum6Third" },
        { option: getOptionNum63DYoung(), containerId: "graphNum6Fourth" },
        { option: getOptionNum63DAged(), containerId: "graphNum6Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-007":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-007",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Peritoneal cavity",
      },
      {
        col11: "Data type",
        col12: "Single cell TCR-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum7Length(), containerId: "graphNum7First" },
        { option: getOptionNum7PieYoung(), containerId: "graphNum7Second" },
        { option: getOptionNum7PieAged(), containerId: "graphNum7Third" },
        { option: getOptionNum73DYoung(), containerId: "graphNum7Fourth" },
        { option: getOptionNum73DAged(), containerId: "graphNum7Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-008":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-008",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Spleen",
      },
      {
        col11: "Data type",
        col12: "Single cell TCR-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum8Length(), containerId: "graphNum8First" },
        { option: getOptionNum8PieYoung(), containerId: "graphNum8Second" },
        { option: getOptionNum8PieAged(), containerId: "graphNum8Third" },
        { option: getOptionNum83DYoung(), containerId: "graphNum8Fourth" },
        { option: getOptionNum83DAged(), containerId: "graphNum8Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-009":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-009",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Liver",
      },
      {
        col11: "Data type",
        col12: "Single cell TCR-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum9Length(), containerId: "graphNum9First" },
        { option: getOptionNum9PieYoung(), containerId: "graphNum9Second" },
        { option: getOptionNum9PieAged(), containerId: "graphNum9Third" },
        { option: getOptionNum93DYoung(), containerId: "graphNum9Fourth" },
        { option: getOptionNum93DAged(), containerId: "graphNum9Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-010":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-010",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Lung",
      },
      {
        col11: "Data type",
        col12: "Single cell TCR-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum10Length(), containerId: "graphNum10First" },
        { option: getOptionNum10PieYoung(), containerId: "graphNum10Second" },
        { option: getOptionNum10PieAged(), containerId: "graphNum10Third" },
        { option: getOptionNum103DYoung(), containerId: "graphNum10Fourth" },
        { option: getOptionNum103DAged(), containerId: "graphNum10Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-011":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-011",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Peritoneal cavity",
      },
      {
        col11: "Data type",
        col12: "Single cell TCR-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum11Length(), containerId: "graphNum11First" },
        { option: getOptionNum11PieYoung(), containerId: "graphNum11Second" },
        { option: getOptionNum11PieAged(), containerId: "graphNum11Third" },
        { option: getOptionNum113DYoung(), containerId: "graphNum11Fourth" },
        { option: getOptionNum113DAged(), containerId: "graphNum11Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-012":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-012",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Spleen",
      },
      {
        col11: "Data type",
        col12: "Single cell TCR-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum12Length(), containerId: "graphNum12First" },
        { option: getOptionNum12PieYoung(), containerId: "graphNum12Second" },
        { option: getOptionNum12PieAged(), containerId: "graphNum12Third" },
        { option: getOptionNum123DYoung(), containerId: "graphNum12Fourth" },
        { option: getOptionNum123DAged(), containerId: "graphNum12Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-013":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-013",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Liver",
      },
      {
        col11: "Data type",
        col12: "Single cell BCR-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum13Length(), containerId: "graphNum13First" },
        { option: getOptionNum133DYoung(), containerId: "graphNum13Fourth" },
        { option: getOptionNum133DAged(), containerId: "graphNum13Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-014":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-014",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Lung",
      },
      {
        col11: "Data type",
        col12: "Single cell BCR-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum14Length(), containerId: "graphNum14First" },
        { option: getOptionNum143DYoung(), containerId: "graphNum14Fourth" },
        { option: getOptionNum143DAged(), containerId: "graphNum14Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-015":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-015",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Peritoneal cavity",
      },
      {
        col11: "Data type",
        col12: "Single cell BCR-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum15Length(), containerId: "graphNum15First" },
        { option: getOptionNum153DYoung(), containerId: "graphNum15Fourth" },
        { option: getOptionNum153DAged(), containerId: "graphNum15Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-016":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-016",
      },
      {
        col11: "Accession",
        col12: "GSE155006",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Comprehensive Profiling of an Aging Immune System Reveals Clonal GZMK+ CD8+ T Cells as Conserved Hallmark of Inflammaging",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33271118",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Spleen",
      },
      {
        col11: "Data type",
        col12: "Single cell BCR-seq",
      },
      {
        col11: "Sample size",
        col12: "6",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Aged: 17 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum16Length(), containerId: "graphNum16First" },
        { option: getOptionNum163DYoung(), containerId: "graphNum16Fourth" },
        { option: getOptionNum163DAged(), containerId: "graphNum16Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-017":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-017",
      },
      {
        col11: "Accession",
        col12: "10.5281/zenodo.4264462",
      },
      {
        col11: "Database",
        col12: "Zenodo",
      },
      {
        col11: "Publication",
        col12:
          "Single-cell immune repertoire and transcriptome sequencing reveals that clonally expanded and transcriptionally distinct lymphocytes populate the aged central nervous system in mice",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33622131",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Central nervous system",
      },
      {
        col11: "Data type",
        col12: "Single cell TCR-seq",
      },
      {
        col11: "Sample size",
        col12: "12",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Middle: 12 months old; Aged: 18 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum17Length(), containerId: "graphNum17First" },
        { option: getOptionNum17Piemerge12(), containerId: "graphNum17Second" },
        { option: getOptionNum17Piemerge18(), containerId: "graphNum17Third" },
        { option: getOptionNum17PiemergeWT(), containerId: "graphNum17Fourth" },
        { option: getOptionNum173Dmerge12(), containerId: "graphNum17Fifth" },
        { option: getOptionNum173Dmerge18(), containerId: "graphNum17Sixth" },
        { option: getOptionNum173DmergeWT(), containerId: "graphNum17Seventh" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-018":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-018",
      },
      {
        col11: "Accession",
        col12: "10.5281/zenodo.4264462",
      },
      {
        col11: "Database",
        col12: "Zenodo",
      },
      {
        col11: "Publication",
        col12:
          "Single-cell immune repertoire and transcriptome sequencing reveals that clonally expanded and transcriptionally distinct lymphocytes populate the aged central nervous system in mice",
      },
      {
        col11: "Year",
        col12: "2021",
      },
      {
        col11: "Pubmed",
        col12: "33622131",
      },
      {
        col11: "Species",
        col12: "Mouse",
      },
      {
        col11: "Tissue",
        col12: "Central nervous system",
      },
      {
        col11: "Data type",
        col12: "Single cell BCR-seq",
      },
      {
        col11: "Sample size",
        col12: "12",
      },
      {
        col11: "Age group",
        col12: "Young:3 months old; Middle: 12 months old; Aged: 18 months old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "4",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum18Length(), containerId: "graphNum18First" },
        { option: getOptionNum183Dmerge12(), containerId: "graphNum18Second" },
        { option: getOptionNum183Dmerge18(), containerId: "graphNum18Third" },
        { option: getOptionNum183DmergeWT(), containerId: "graphNum18Fourth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-019":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-019",
      },
      {
        col11: "Accession",
        col12: "PRJNA356133",
      },
      {
        col11: "Database",
        col12: "NCBI",
      },
      {
        col11: "Publication",
        col12:
          "Phylogenetic analysis of the human antibody repertoire reveals quantitative signatures of immune senescence and aging",
      },
      {
        col11: "Year",
        col12: "2017",
      },
      {
        col11: "Pubmed",
        col12: "28096374",
      },
      {
        col11: "Species",
        col12: "Human",
      },
      {
        col11: "Tissue",
        col12: "Blood",
      },
      {
        col11: "Data type",
        col12: "Immunoglobulin heavy chain sequencing",
      },
      {
        col11: "Sample size",
        col12: "108",
      },
      {
        col11: "Age group",
        col12: "Young: 21-24 years old; Aged: 73-93 years old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "122.5",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum19Lengthday0(), containerId: "graphNum19First" },
        {
          option: getOptionNum193Dday0Young(),
          containerId: "graphNum19Second",
        },
        { option: getOptionNum193Dday0Old(), containerId: "graphNum19Third" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
  case "AMO-TB-020":
    detailData = [
      {
        col11: "Dataset ID",
        col12: "AMO-TB-020",
      },
      {
        col11: "Accession",
        col12: "GSE157007",
      },
      {
        col11: "Database",
        col12: "GEO",
      },
      {
        col11: "Publication",
        col12:
          "Multidimensional single-cell analysis of human peripheral blood reveals characteristic features of the immune system landscape in aging and frailty",
      },
      {
        col11: "Year",
        col12: "2022",
      },
      {
        col11: "Pubmed",
        col12: "37117750",
      },
      {
        col11: "Species",
        col12: "Human",
      },
      {
        col11: "Tissue",
        col12: "Blood",
      },
      {
        col11: "Data type",
        col12: "Single cell TCR V(D)J sequencing",
      },
      {
        col11: "Sample size",
        col12: "17",
      },
      {
        col11: "Age group",
        col12: "Young: 23-42years old; Aged: 72-100 years old",
      },
      {
        col11: "Maximum lifespan (year)",
        col12: "122.5",
      },
    ];
    onMounted(() => {
      const chartConfigs = [
        { option: getOptionNum20Length(), containerId: "graphNum20First" },
        { option: getOptionNum20PieYoung(), containerId: "graphNum20Second" },
        { option: getOptionNum20PieAged(), containerId: "graphNum20Third" },
        { option: getOptionNum203DYoung(), containerId: "graphNum20Fourth" },
        { option: getOptionNum203DAged(), containerId: "graphNum20Fifth" },
      ];
      chartConfigs.forEach((config) => {
        const { option, containerId } = config;
        const chart = echarts.init(document.getElementById(containerId));
        chart.setOption(option);
      });
    });
    break;
}
</script>
<style scoped src="../styles/dataset.css"></style>
