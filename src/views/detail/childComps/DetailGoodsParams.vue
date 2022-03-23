<template>
  <div class="detail-goods-params" v-if="Object.keys(itemParams).length !== 0">
    <table class="rules" v-for="(table, index) in itemParams.rule.tables" :key="index">
      <tr class="rule-tr" v-for="(tr, indey) in table" :key="indey">
        <td class="rule-td" v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="info">
      <tr class="info-tr" v-for="(item,indea) in itemParams.info.set">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    itemParams: {
      typeof: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-goods-params {
  padding-bottom: 30px;
  border-bottom: 10px solid #eeeeee;
}

.rules {
  width: 100%;
  padding: 0px 20px;
}
.rule-tr {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #eeeeee;
}
.rule-tr:last-child {
  border-bottom: 2px solid #eeeeee;
}
.rule-td {
  flex: 1;
  font-size: 14px;
}

.info {
  width: 100%;
  padding: 0 20px;
}
.info-tr {
  height: 40px;
  width: 100%;
  line-height: 20px;
}
.info-tr>td {
  font-size: 14px;
  border-bottom: 1px solid #eeeeee;
  padding: 10px 0;
}
.info-tr>td:first-child {
  width: 25%;
}
.info-tr>td:last-child {
  color: var(--color-high-text);
}
</style>